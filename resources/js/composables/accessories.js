import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default function useAccessories() {
    const accessories = ref([]);
    const accessory = ref([]);
    const router = useRouter();
    const errors = ref("");
    let percentage = ref(0);
    let fd = new FormData();

    const getAccessories = async () => {
        let response = await axios.get("/api/accessories");
        accessories.value = response.data.data;
    };

    const getAccessory = async (id) => {
        let response = await axios.get("/api/accessories/" + id);
        accessory.value = response.data.data;
    };
    const getAccessoryDetails = async (slug) => {
        let response = await axios.get("/api/accessory/" + slug);
        accessory.value = response.data.data;
    };

    const storeAccessory = async (data) => {
        fd.append("category_id", data.form.category_id);
        fd.append("name_en", data.form.name_en);
        fd.append("name_ar", data.form.name_ar);
        fd.append("description_en", data.form.description_en);
        fd.append("description_ar", data.form.description_ar);
        fd.append("accessory_img", data.form.image);
        fd.append("image", data.file);
        errors.value = "";
        try {
            await axios.post("/api/accessories", fd, {
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
            await router.push({ name: "accessories.index" });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const updateAccessory = async (id, data) => {
        fd.append("_method", "patch");
        fd.append("category_id", data.form.category_id);
        fd.append("name_en", data.form.name_en);
        fd.append("name_ar", data.form.name_ar);
        fd.append("description_en", data.form.description_en);
        fd.append("description_ar", data.form.description_ar);
        fd.append("accessory_img", data.form.image);
        fd.append("new_image", data.file);
        errors.value = "";
        try {
            await axios.post("/api/accessories/" + id, fd, {
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
            await router.push({ name: "accessories.index" });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const deleteProperty = async (id) => {
        await axios.delete("/api/cat-property/" + id);
    };
    const destroyAccessory = async (id) => {
        await axios.delete("/api/accessories/" + id);
    };
    const addGallery = async (images) => {
        for (var i = 0; i < images.length; i++) {
            let file = images[i];
            fd.append("images[" + i + "]", file);
            console.log("i: " + i);
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
        await axios.delete("/api/delete-accessory-image/" + id);
    };
    const destroyFile = async (id) => {
        console.log(id);
        await axios.delete("/api/delete-accessory-file/" + id);
    };

    return {
        accessories,
        accessory,
        errors,
        getAccessories,
        getAccessory,
        storeAccessory,
        updateAccessory,
        destroyAccessory,
        deleteProperty,
        addGallery,
        addFiles,
        getAccessoryDetails,
        destroyImage,
        destroyFile,
        percentage,
    };
}
