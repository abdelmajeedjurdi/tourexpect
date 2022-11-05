import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default function usePackages() {
    const packages = ref([]);
    const single_package = ref([]);
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

    const getPackages = async (page) => {
        let response = await axios.get(`/api/packages?page=${page}`);
        packages.value = response.data.data;
        pages.value = response.data.meta
    };

    const getAllPacks = async (page) => {
        let response = await axios.get(`/api/all-packs?page=${page}`);
        packages.value = response.data.data;
        pages.value = response.data.meta
    };
    const getFilteredPacks = async (filter) => {
        let response = await axios.get(`/api/filtered-packs?d=${filter.destination}&c=${filter.category}&page=${filter.page}`);

        packages.value = response.data.data;
        pages.value = response.data.meta
    };
    const getDestinationPacks = async (page, destination, subdestination = null) => {
        let response = await axios.get(`/api/destination-packs?page=${page}&destination=${destination}&subdestination=${subdestination}`);
        packages.value = response.data.data;
        pages.value = response.data.meta
        alter_pages.value['current_page'] = response.data['current_page']
        alter_pages.value['last_page'] = response.data['last_page']
        alter_pages.value['from'] = response.data['from']
        alter_pages.value['links'] = response.data['links']
        alter_pages.value['to'] = response.data['to']
        alter_pages.value['total'] = response.data['total']
        alter_pages.value['path'] = response.data['path']

    };
    const getPackage = async (id) => {
        let response = await axios.get("/api/packages/" + id);
        single_package.value = response.data.data;
    };
    const getPackageDetails = async (slug) => {
        let response = await axios.get("/api/single_package/" + slug);
        single_package.value = response.data.data;
    };

    const storePackage = async (data) => {
        fd.append("category_id", data.form.category_id);
        fd.append("destination_id", data.form.destination_id);
        fd.append("title_en", data.form.title_en);
        fd.append("title_ar", data.form.title_ar);
        fd.append("description_en", data.form.description_en);
        fd.append("description_ar", data.form.description_ar);
        fd.append("package_img", data.form.image);
        fd.append("address_ar", data.form.address_ar);
        fd.append("address_en", data.form.address_en);
        fd.append("itinerary_en", data.form.itinerary_en);
        fd.append("itinerary_ar", data.form.itinerary_ar);
        fd.append("active", data.form.active);
        fd.append("adult_price", data.form.adult_price);
        fd.append("child_price", data.form.child_price);
        fd.append("discount", data.form.discount);
        fd.append("discount_type", data.form.discount_type);
        fd.append("duration_en", data.form.duration_en);
        fd.append("duration_ar", data.form.duration_ar);
        fd.append("max_number_of_people", data.form.max_number_of_people);
        fd.append("include_en", data.form.include_en);
        fd.append("include_ar", data.form.include_ar);
        fd.append("exclude_en", data.form.exclude_en);
        fd.append("exclude_ar", data.form.exclude_ar);
        fd.append("source", data.form.source);
        fd.append("options_ar", data.form.options_ar);
        fd.append("options_en", data.form.options_en);
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


        fd.append("image", data.file);


        fd.append("properties", JSON.stringify(data.properties));
        errors.value = "";
        try {
            await axios.post("/api/packages", fd, {
                onUploadProgress: function (progressEvent) {
                    percentage.value = parseInt(
                        Math.round(
                            (progressEvent.loaded / progressEvent.total) * 100
                        )
                    );
                },
            });
            await router.push({ name: "packages.index" });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const updatePackage = async (id, data) => {
        fd.append("_method", "patch");
        fd.append("category_id", data.form.category_id);
        fd.append("destination_id", data.form.destination_id);
        fd.append("title_en", data.form.title_en);
        fd.append("title_ar", data.form.title_ar);
        fd.append("description_en", data.form.description_en);
        fd.append("description_ar", data.form.description_ar);
        fd.append("address_ar", data.form.address_ar);
        fd.append("address_en", data.form.address_en);
        fd.append("itinerary_en", data.form.itinerary_en);
        fd.append("itinerary_ar", data.form.itinerary_ar);
        fd.append("active", data.form.active);
        fd.append("adult_price", data.form.adult_price);
        fd.append("child_price", data.form.child_price);
        fd.append("discount", data.form.discount);
        fd.append("discount_type", data.form.discount_type);
        fd.append("duration_en", data.form.duration_en);
        fd.append("duration_ar", data.form.duration_ar);
        fd.append("max_number_of_people", data.form.max_number_of_people);
        fd.append("include_en", data.form.include_en);
        fd.append("include_ar", data.form.include_ar);
        fd.append("exclude_en", data.form.exclude_en);
        fd.append("exclude_ar", data.form.exclude_ar);
        fd.append("source", data.form.source);
        fd.append("options_ar", data.form.options_ar);
        fd.append("options_en", data.form.options_en);
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
        fd.append("package_img", data.form.thumbnail);
        fd.append("new_image", data.file);
        fd.append("properties", JSON.stringify(data.properties));
        errors.value = "";
        try {
            await axios.post("/api/packages/" + id, fd, {
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
            await router.push({ name: "packages.index" });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const deleteProperty = async (id) => {
        await axios.delete("/api/cat-property/" + id);
    };
    const destroyPackage = async (id) => {
        await axios.delete("/api/packages/" + id);
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
        await axios.delete("/api/delete-package-image/" + id);
    };
    const destroyFile = async (id) => {
        await axios.delete("/api/delete-file/" + id);
    };

    const dublicate = async (id) => {
        await axios.post("/api/single_package/dublicate/" + id);
    }
    return {
        packages, dublicate,
        single_package,
        errors,
        getPackages,
        getPackage,
        storePackage,
        updatePackage,
        destroyPackage,
        deleteProperty,
        addGallery,
        addFiles,
        getPackageDetails,
        destroyImage,
        destroyFile,
        percentage, pages, getAllPacks, getDestinationPacks, getFilteredPacks
    };
}
