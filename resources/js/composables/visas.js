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
        visa.value['banner_highlights'] = JSON.parse(visa.value['banner_highlights'])
        visa.value['options'] = JSON.parse(visa.value['options'])
        visa.value['itinerary'] = JSON.parse(visa.value['itinerary'])
        visa.value['category_ids'] = JSON.parse(visa.value['category_ids'])
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
        fd.append("_method", "patch");
        fd.append("category_ids", JSON.stringify(data.form.category_ids));
        fd.append("country_passport_ids", JSON.stringify(data.form.country_passport_ids));
        fd.append("title_en", data.form.title_en);
        fd.append("title_ar", data.form.title_ar);
        fd.append("description_en", data.form.description_en);
        fd.append("description_ar", data.form.description_ar);
        fd.append("address_ar", data.form.address_ar);
        fd.append("address_en", data.form.address_en);
        fd.append("itinerary", JSON.stringify(data.form.itinerary))
        fd.append("active", data.form.active);
        fd.append("duration_en", data.form.duration_en);
        fd.append("duration_ar", data.form.duration_ar);
        fd.append("max_number_of_people", data.form.max_number_of_people);
        fd.append("include_en", data.form.include_en);
        fd.append("include_ar", data.form.include_ar);
        fd.append("exclude_en", data.form.exclude_en);
        fd.append("exclude_ar", data.form.exclude_ar);
        fd.append("source", data.form.source);
        fd.append("highlights_ar", data.form.highlights_ar);
        fd.append("highlights_en", data.form.highlights_en);
        fd.append("information_ar", data.form.information_ar);
        fd.append("information_en", data.form.information_en);
        fd.append("policy_ar", data.form.policy_ar);
        fd.append("policy_en", data.form.policy_en);
        fd.append("timing_and_transfer_ar", data.form.timing_and_transfer_ar)
        fd.append("timing_and_transfer_en", data.form.timing_and_transfer_en)
        fd.append("notes_en", data.form.notes_en)
        fd.append("notes_ar", data.form.notes_ar)
        fd.append("terms_and_conditions_en", data.form.terms_and_conditions_en)
        fd.append("terms_and_conditions_ar", data.form.terms_and_conditions_ar)
        fd.append("is_from", data.form.is_from)
        fd.append("banner_highlights", JSON.stringify(data.form.banner_highlights))
        fd.append("options", JSON.stringify(data.form.options))
        fd.append("visa_img", data.form.thumbnail);
        fd.append("new_image", data.file);
        fd.append("properties", JSON.stringify(data.properties));
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
