import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default function useTours() {
    const tours = ref([]);
    const tour = ref([]);
    const router = useRouter();
    const errors = ref("");
    let percentage = ref(0);
    let fd = new FormData();

    const getTours = async () => {
        let response = await axios.get("/api/tours");
        tours.value = response.data.data;
    };

    const getTour = async (id) => {
        let response = await axios.get("/api/tours/" + id);
        tour.value = response.data.data;
    };
    const getTourDetails = async (slug) => {
        // console.log(router.options.routes);
        let response = await axios.get("/api/tour/" + slug);
        tour.value = response.data.data;
    };

    const storeTour = async (data) => {
        fd.append("category_id", data.form.category_id);
        fd.append("title_en", data.form.title_en);
        fd.append("title_ar", data.form.title_ar);
        fd.append("description_en", data.form.description_en);
        fd.append("description_ar", data.form.description_ar);
        fd.append("tour_img", data.form.image);
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


        fd.append("image", data.file);


        fd.append("properties", JSON.stringify(data.properties));
        errors.value = "";
        try {
            await axios.post("/api/tours", fd, {
                onUploadProgress: function (progressEvent) {
                    percentage.value = parseInt(
                        Math.round(
                            (progressEvent.loaded / progressEvent.total) * 100
                        )
                    );
                    console.log(
                        Math.round(
                            (progressEvent.loaded / progressEvent.total) * 100
                        )
                    );
                },
            });
            await router.push({ name: "tours.index" });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const updateTour = async (id, data) => {
        console.log(data.form.thumbnail);
        fd.append("_method", "patch");
        fd.append("category_id", data.form.category_id);
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
        fd.append("tour_img", data.form.thumbnail);
        fd.append("new_image", data.file);
        fd.append("properties", JSON.stringify(data.properties));
        errors.value = "";
        try {
            await axios.post("/api/tours/" + id, fd, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                onUploadProgress: function (progressEvent) {
                    percentage.value = parseInt(
                        Math.round(
                            (progressEvent.loaded / progressEvent.total) * 100
                        )
                    );
                    console.log(
                        Math.round(
                            (progressEvent.loaded / progressEvent.total) * 100
                        )
                    );
                },
            });
            await router.push({ name: "tours.index" });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const deleteProperty = async (id) => {
        await axios.delete("/api/cat-property/" + id);
    };
    const destroyTour = async (id) => {
        await axios.delete("/api/tours/" + id);
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
            console.log("i: " + i);
        }
    };
    const destroyImage = async (id) => {
        console.log(id);
        await axios.delete("/api/delete-image/" + id);
    };
    const destroyFile = async (id) => {
        console.log(id);
        await axios.delete("/api/delete-file/" + id);
    };

    return {
        tours,
        tour,
        errors,
        getTours,
        getTour,
        storeTour,
        updateTour,
        destroyTour,
        deleteProperty,
        addGallery,
        addFiles,
        getTourDetails,
        destroyImage,
        destroyFile,
        percentage,
    };
}
