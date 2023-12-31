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
        let response = await axios.get(`/api/filtered-activities?d=${JSON.stringify(filter.destinations)}&c=${JSON.stringify(filter.categories)}&page=${filter.page}`);

        activities.value = response.data.data;
        pages.value = response.data.meta
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
        activity.value['banner_highlights'] = JSON.parse(activity.value['banner_highlights'])
        activity.value['options'] = JSON.parse(activity.value['options'])
        activity.value['itinerary'] = JSON.parse(activity.value['itinerary'])
        activity.value['category_ids'] = JSON.parse(activity.value['category_ids'])
        activity.value['destination_ids'] = JSON.parse(activity.value['destination_ids'])
    };
    const getActivityDetails = async (slug) => {
        let response = await axios.get("/api/activity/" + slug);
        activity.value = response.data.data;
        activity.value['banner_highlights'] = JSON.parse(activity.value['banner_highlights'])
        activity.value['options'] = JSON.parse(activity.value['options'])
        activity.value['itinerary'] = JSON.parse(activity.value['itinerary'])
    };

    const storeActivity = async (data) => {
        fd.append("category_ids", JSON.stringify(data.form.category_ids));
        fd.append("destination_ids", JSON.stringify(data.form.destination_ids));
        fd.append("title_en", data.form.title_en);
        fd.append("title_ar", data.form.title_ar);
        fd.append("description_en", data.form.description_en);
        fd.append("description_ar", data.form.description_ar);
        fd.append("activity_img", data.form.image);
        fd.append("address_ar", data.form.address_ar);
        fd.append("address_en", data.form.address_en);
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
        fd.append("banner_highlights", JSON.stringify(data.form.banner_highlights))
        fd.append("options", JSON.stringify(data.form.options))
        fd.append("itinerary", JSON.stringify(data.form.itinerary));
        fd.append("is_from", data.form.is_from)


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
        fd.append("category_ids", JSON.stringify(data.form.category_ids));
        fd.append("destination_ids", JSON.stringify(data.form.destination_ids));
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
        await axios.delete("/api/delete-activity-image/" + id);
    };
    const destroyFile = async (id) => {
        await axios.delete("/api/delete-file/" + id);
    };

    const duplicate = async (id) => {
        await axios.post("/api/activity/duplicate/" + id);
    }
    return {
        activities, duplicate,
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
        destroyFile,
        percentage, pages, getAllActivities, getDestinationActivities, getFilteredActivities
    };
}
