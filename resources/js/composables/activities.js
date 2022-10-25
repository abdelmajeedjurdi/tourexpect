import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default function useActivities() {
    const activities = ref([]);
    const activity = ref([]);
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

    const getActivities = async (page) => {
        let response = await axios.get(`/api/activities?page=${page}`);
        activities.value = response.data.data;
        pages.value = response.data.meta
    };
    const getAllActivities = async (page) => {
        let response = await axios.get(`/api/all-activities?page=${page}`);
        activities.value = response.data.data;

        pages.value = response.data.meta
    };
    const getFilteredActivities = async (filter) => {
        let response = await axios.get(`/api/filtered-activities?d=${filter.destination}&c=${filter.category}&page=${filter.page}`);

        activities.value = response.data.data;
        pages.value = response.data.data
    };
    const getDestinationActivities = async (page, destination, subdestination = null) => {
        let response = await axios.get(`/api/destination-activities?page=${page}&destination=${destination}&subdestination=${subdestination}`);
        activities.value = response.data.data;
        pages.value = response.data.meta
        alter_pages.value['current_page'] = response.data['current_page']
        alter_pages.value['last_page'] = response.data['last_page']
        alter_pages.value['from'] = response.data['from']
        alter_pages.value['links'] = response.data['links']
        alter_pages.value['to'] = response.data['to']
        alter_pages.value['total'] = response.data['total']
        alter_pages.value['path'] = response.data['path']

    };

    const getActivity = async (id) => {
        let response = await axios.get("/api/activities/" + id);
        activity.value = response.data.data;
    };
    const getActivityDetails = async (slug) => {
        let response = await axios.get("/api/activity/" + slug);
        activity.value = response.data.data;
    };

    const storeActivity = async (data) => {
        fd.append("category_id", data.form.category_id);
        fd.append("destination_id", data.form.destination_id);
        fd.append("title_en", data.form.title_en);
        fd.append("title_ar", data.form.title_ar);
        fd.append("description_en", data.form.description_en);
        fd.append("description_ar", data.form.description_ar);
        fd.append("activity_img", data.form.image);
        fd.append("address_ar", data.form.address_ar);
        fd.append("address_en", data.form.address_en);
        fd.append("highlights_en", data.form.highlights_en);
        fd.append("highlights_ar", data.form.highlights_ar);
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


        fd.append("image", data.file);


        fd.append("properties", JSON.stringify(data.properties));
        errors.value = "";
        try {
            await axios.post("/api/activities", fd, {
                onUploadProgress: function (progressEvent) {
                    percentage.value = parseInt(
                        Math.round(
                            (progressEvent.loaded / progressEvent.total) * 100
                        )
                    );
                },
            });
            await router.push({ name: "activities.index" });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const updateActivity = async (id, data) => {
        fd.append("_method", "patch");
        fd.append("category_id", data.form.category_id);
        fd.append("destination_id", data.form.destination_id);
        fd.append("title_en", data.form.title_en);
        fd.append("title_ar", data.form.title_ar);
        fd.append("description_en", data.form.description_en);
        fd.append("description_ar", data.form.description_ar);
        fd.append("address_ar", data.form.address_ar);
        fd.append("address_en", data.form.address_en);
        fd.append("highlights_en", data.form.highlights_en);
        fd.append("highlights_ar", data.form.highlights_ar);
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
        fd.append("activity_img", data.form.thumbnail);
        fd.append("new_image", data.file);
        fd.append("properties", JSON.stringify(data.properties));
        errors.value = "";
        try {
            await axios.post("/api/activities/" + id, fd, {
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
            await router.push({ name: "activities.index" });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const deleteProperty = async (id) => {
        await axios.delete("/api/cat-property/" + id);
    };
    const destroyActivity = async (id) => {
        await axios.delete("/api/activities/" + id);
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
        await axios.delete("/api/delete-image/" + id);
    };
    const destroyFile = async (id) => {
        await axios.delete("/api/delete-file/" + id);
    };

    const dublicate = async (id) => {
        await axios.post("/api/activity/dublicate/" + id);
    }
    return {
        activities, dublicate,
        activity,
        errors,
        getActivities,
        getActivity,
        storeActivity,
        updateActivity,
        destroyActivity,
        deleteProperty,
        addGallery,
        addFiles,
        getActivityDetails,
        destroyImage,
        destroyFile, getDestinationActivities,
        percentage, pages, getAllActivities, alter_pages, getFilteredActivities
    };
}
