import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default function useCategories() {
    const categories = ref([]);
    const category = ref([]);
    const router = useRouter();
    const errors = ref("");

    const getCategories = async () => {
        let response = await axios.get("/api/categories");
        categories.value = response.data.data;
    };

    const getCategory = async (id) => {
        let response = await axios.get("/api/categories/" + id);
        category.value = response.data.data;
    };

    const storeCategory = async (data) => {
        let fd = new FormData();
        fd.append("name_en", data.form.name_en);
        fd.append("name_ar", data.form.name_ar);
        fd.append("description_en", data.form.description_en);
        fd.append("description_ar", data.form.description_ar);
        fd.append("is_slide", data.form.is_slide);
        fd.append("is_trending", data.form.is_trending);
        fd.append("category_img", data.form.image);
        fd.append("image", data.file);
        errors.value = "";
        try {
            await axios.post("/api/categories", fd);
            await router.push({ name: "categories.index" });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const updateCategory = async (id) => {
        errors.value = "";
        try {
            await axios.put("/api/categories/" + id, category.value);
            await router.push({ name: "categories.index" });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const destroyCategory = async (id) => {
        await axios.delete("/api/categories/" + id);
    };

    return {
        categories,
        category,
        errors,
        getCategories,
        getCategory,
        storeCategory,
        updateCategory,
        destroyCategory,
    };
}
