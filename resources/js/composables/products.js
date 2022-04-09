import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default function useProducts() {
    const products = ref([]);
    const product = ref([]);
    const router = useRouter();
    const errors = ref("");

    const getProducts = async () => {
        let response = await axios.get("/api/products");
        products.value = response.data.data;
    };

    const getProduct = async (id) => {
        let response = await axios.get("/api/products/" + id);
        product.value = response.data.data;
    };

    const storeProduct = async (data) => {
        let fd = new FormData();
        fd.append("name_en", data.form.name_en);
        fd.append("name_ar", data.form.name_ar);
        fd.append("description_en", data.form.description_en);
        fd.append("description_ar", data.form.description_ar);
        fd.append("is_slide", data.form.is_slide);
        fd.append("is_trending", data.form.is_trending);
        fd.append("product_img", data.form.image);
        fd.append("image", data.file);
        fd.append("properties", JSON.stringify(data.properties));
        errors.value = "";
        try {
            await axios.post("/api/products", fd);
            await router.push({ name: "products.index" });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const updateProduct = async (id) => {
        errors.value = "";
        try {
            await axios.put("/api/products/" + id, product.value);
            await router.push({ name: "products.index" });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const deleteProperty = async (id) => {
        await axios.delete("/api/cat-property/" + id);
    };
    const destroyProduct = async (id) => {
        await axios.delete("/api/products/" + id);
    };

    return {
        products,
        product,
        errors,
        getProducts,
        getProduct,
        storeProduct,
        updateProduct,
        destroyProduct,
        deleteProperty,
    };
}
