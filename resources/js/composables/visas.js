import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default function useVisas() {
    const visas = ref([]);
    const visa = ref([]);
    const router = useRouter();
    const errors = ref("");
    const pages = ref([])
    const alter_pages = ref({
        current_page: null,
        from: null,
        last_page: null,
        links: [],
        path: null,
        per_page: null,
        to: null,
        total: null
    })
    let percentage = ref(0);
    let fd = new FormData();

    const getVisas = async (page) => {
        let response = await axios.get(`/api/visas?page=${page}`);
        visas.value = response.data.data;
        pages.value = response.data.meta
    };

    const getAllVisas = async (page) => {
        let response = await axios.get(`/api/all-visas?page=${page}`);
        visas.value = response.data.data;
        pages.value = response.data.meta
    };
    const getFilteredVisas = async (filter) => {
        console.log(filter.categories);
        let response = await axios.get(`/api/filtered-visas?d=${JSON.stringify(filter.destinations)}&c=${JSON.stringify(filter.categories)}&page=${filter.page}`);

        visas.value = response.data.data;
        pages.value = response.data.meta
    };
    const getDestinationVisas = async (page, destination, subdestination = null) => {
        let response = await axios.get(`/api/destination-visas?page=${page}&destination=${destination}&subdestination=${subdestination}`);
        visas.value = response.data.data;
        pages.value = response.data.meta
        alter_pages.value['current_page'] = response.data['current_page']
        alter_pages.value['last_page'] = response.data['last_page']
        alter_pages.value['from'] = response.data['from']
        alter_pages.value['links'] = response.data['links']
        alter_pages.value['to'] = response.data['to']
        alter_pages.value['total'] = response.data['total']
        alter_pages.value['path'] = response.data['path']

    };
    const getVisa = async (id) => {
        let response = await axios.get("/api/visas/" + id);
        visa.value = response.data.data;
        visa.value['options'] = JSON.parse(visa.value['options'])
        visa.value['country_passport_ids'] = JSON.parse(visa.value['country_passport_ids'])
    };
    const getVisaDetails = async (slug) => {
        let response = await axios.get("/api/visa/" + slug);
        visa.value = response.data.data;
        visa.value['banner_highlights'] = JSON.parse(visa.value['banner_highlights'])
        visa.value['options'] = JSON.parse(visa.value['options'])
        visa.value['itinerary'] = JSON.parse(visa.value['itinerary'])
    };

    const storeVisa = async (data) => {
        fd.append("country_passport_ids", JSON.stringify(data.form.country_passport_ids));
        fd.append("title_en", data.form.title_en);
        fd.append("title_ar", data.form.title_ar);
        fd.append("documents_en", data.form.documents_en);
        fd.append("documents_ar", data.form.documents_ar);
        fd.append("conditions_en", data.form.conditions_en);
        fd.append("conditions_ar", data.form.conditions_ar);
        fd.append("types_en", data.form.types_en);
        fd.append("types_ar", data.form.types_ar);
        fd.append("options", JSON.stringify(data.form.options))

        errors.value = "";
        try {
            await axios.post("/api/visas", fd, {
                onUploadProgress: function (progressEvent) {
                    percentage.value = parseInt(
                        Math.round(
                            (progressEvent.loaded / progressEvent.total) * 100
                        )
                    );
                },
            });
            await router.push({ name: "visas.index" });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const updateVisa = async (id, data) => {
        console.log(data);
        fd.append("_method", "patch");
        fd.append("country_passport_ids", JSON.stringify(data.form.country_passport_ids));
        fd.append("title_en", data.form.title_en);
        fd.append("title_ar", data.form.title_ar);
        fd.append("documents_en", data.form.documents_en);
        fd.append("documents_ar", data.form.documents_ar);
        fd.append("conditions_en", data.form.conditions_en);
        fd.append("conditions_ar", data.form.conditions_ar);
        fd.append("types_en", data.form.types_en);
        fd.append("types_ar", data.form.types_ar);
        fd.append("options", JSON.stringify(data.form.options));
        errors.value = "";
        try {
            await axios.post("/api/visas/" + id, fd, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                onUploadProgress: function (progressEvent) {
                    percentage.value = parseInt(
                        Math.round(
                            (progressEvent.loaded / progressEvent.total) * 100
                        )
                    );
                },
            });
            await router.push({ name: "visas.index" });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const deleteProperty = async (id) => {
        await axios.delete("/api/cat-property/" + id);
    };
    const destroyVisa = async (id) => {
        await axios.delete("/api/visas/" + id);
    };
    const addGallery = async (images) => {
        for (var i = 0; i < images.length; i++) {
            let file = images[i];
            fd.append("images[" + i + "]", file);
        }
    };
    const addFiles = async (files) => {
        for (var i = 0; i < files.length; i++) {
            let file = files[i];
            fd.append("files[" + i + "]", file);
        }
    };
    const destroyImage = async (id) => {
        await axios.delete("/api/delete-visa-image/" + id);
    };
    const destroyFile = async (id) => {
        await axios.delete("/api/delete-file/" + id);
    };

    const duplicate = async (id) => {
        await axios.post("/api/visa/duplicate/" + id);
    }
    return {
        visas, duplicate,
        visa,
        errors,
        getVisas,
        getVisa,
        storeVisa,
        updateVisa,
        destroyVisa,
        deleteProperty,
        addGallery,
        addFiles,
        getVisaDetails,
        destroyImage,
        destroyFile,
        percentage, pages, getAllVisas, getDestinationVisas, getFilteredVisas
    };
}
