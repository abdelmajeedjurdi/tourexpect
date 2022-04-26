import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default function useProducts() {
    const products = ref([]);
    const product = ref([]);
    const router = useRouter();
    const errors = ref("");
    let fd = new FormData();

    const getProducts = async () => {
        let response = await axios.get("/api/products");
        products.value = response.data.data;
    };

    const getProduct = async (id) => {
        let response = await axios.get("/api/products/" + id);
        product.value = response.data.data;
        console.log(product.value);
    };
    const getProductDetails = async (slug) => {
        // console.log(router.options.routes);
        let response = await axios.get("/api/product/" + slug);
        product.value = response.data.data;
    };

    const storeProduct = async (data) => {
        fd.append("category_id", data.form.category_id);
        fd.append("name_en", data.form.name_en);
        fd.append("name_ar", data.form.name_ar);
        fd.append("description_en", data.form.description_en);
        fd.append("description_ar", data.form.description_ar);
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

    const updateProduct = async (id, data) => {
        fd.append("_method", "patch");
        fd.append("category_id", data.form.category_id);
        fd.append("name_en", data.form.name_en);
        fd.append("name_ar", data.form.name_ar);
        fd.append("description_en", data.form.description_en);
        fd.append("description_ar", data.form.description_ar);
        fd.append("product_img", data.form.image);
        fd.append("new_image", data.file);
        fd.append("properties", JSON.stringify(data.properties));
        errors.value = "";
        try {
            await axios.post("/api/products/" + id, fd, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
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
        products,
        product,
        errors,
        getProducts,
        getProduct,
        storeProduct,
        updateProduct,
        destroyProduct,
        deleteProperty,
        addGallery,
        addFiles,
        getProductDetails,
        destroyImage,
        destroyFile,
    };
}
