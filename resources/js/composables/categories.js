import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default function useCategories() {
    const categories = ref([]);
    const category = ref([]);
    const slides = ref([]);
    const router = useRouter();
    const errors = ref("");
    const tours = ref([]);
    const pages = ref([])

    const getCategories = async (page) => {
        let response = await axios.get(`/api/categories?page=${page}`);
        categories.value = response.data.data;
        pages.value = response.data.meta
    };
    const getAllCategories = async (page) => {
        let response = await axios.get(`/api/all-categories?page=${page}`);
        categories.value = response.data.data;
        pages.value = response.data.meta
    };
    const getCategoriesOnSection = async (type) => {
        let response = await axios.get(`/api/categories-on-section?type=${type}`);
        categories.value = response.data.data;
        // pages.value = response.data.meta
    };
    const getFlagsOrSigns = async (type) => {
        let response = await axios.get("/api/get-flags-signs?type=" + type);
        categories.value = response.data.data;
    };
    const getSlides = async () => {
        let response = await axios.get("/api/categories-slides");
        slides.value = response.data.data;
    };

    const getCategory = async (id) => {
        let response = await axios.get("/api/categories/" + id);
        category.value = response.data.data;
    };
    const getCategoryDetails = async (slug) => {
        let response = await axios.get("/api/category/" + slug);
        category.value = response.data.category;
        tours.value = response.data.tours;
    };

    const storeCategory = async (data) => {
        let fd = new FormData();
        fd.append("category", 'flag');
        fd.append("name_en", data.form.name_en);
        fd.append("name_ar", data.form.name_ar);
        fd.append("description_en", data.form.description_en);
        fd.append("description_ar", data.form.description_ar);
        fd.append("is_slide", data.form.is_slide);
        fd.append("is_trending", data.form.is_trending);
        fd.append("for_category", data.form.for_category);
        fd.append("category_img", data.form.image);
        fd.append("image", data.file);
        fd.append("properties", JSON.stringify(data.properties));
        errors.value = "";
        try {
            await axios.post("/api/categories", fd, {
                onUploadProgress: function (progressEvent) {
                    // uploadPercentage = parseInt(
                    //     Math.round(
                    //         (progressEvent.loaded / progressEvent.total) * 100
                    //     )
                    // );
                },
            });
            await router.push({ name: "categories.index" });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const updateCategory = async (id, data) => {
        let fd = new FormData();
        fd.append("_method", "patch");
        fd.append("category", 'flag');
        fd.append("name_en", data.form.name_en);
        fd.append("name_ar", data.form.name_ar);
        fd.append("description_en", data.form.description_en);
        fd.append("description_ar", data.form.description_ar);
        fd.append("is_slide", data.form.is_slide);
        fd.append("is_trending", data.form.is_trending);
        fd.append("for_category", data.form.for_category);
        fd.append("category_img", data.form.image);
        fd.append("new_image", data.file);
        fd.append("properties", JSON.stringify(data.form.properties));

        errors.value = "";
        try {
            await axios.post("/api/categories/" + id, fd, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            await router.push({ name: "categories.index" });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const deleteProperty = async (id) => {
        await axios.delete("/api/cat-property/" + id);
    };
    const destroyCategory = async (id) => {
        await axios.delete("/api/categories/" + id);
    };
    const dublicate = async (id) => {
        await axios.post("/api/category/dublicate/" + id);
    }

    return {
        categories,
        category,
        errors,
        getCategories, getAllCategories, getCategoriesOnSection,
        getCategory,
        storeCategory,
        updateCategory,
        destroyCategory,
        deleteProperty,
        getSlides,
        slides,
        getCategoryDetails,
        tours,
        getFlagsOrSigns, pages, dublicate
    };
}
