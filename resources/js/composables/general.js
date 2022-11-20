import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default function useGeneral() {
    const destinations = ref([]);
    const router = useRouter();
    let fd = new FormData();
    let icons = ref([])

    const getDestinations = async (page) => {
        let response = await axios.get(`/api/nav-destination`);
        destinations.value = response.data.data;
    };

    const addGallery = async (images) => {
        for (var i = 0; i < images.length; i++) {
            let file = images[i];
            fd.append("images[" + i + "]", file);
        }
    };
    const updateIcons = async () => {


        fd.append("_method", "patch");

        try {
            await axios.post("/api/update-icons", fd, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            // await router.push({ name: "tours.index" });
            getIcons()
        } catch (e) {
            if (e.response.status === 422) {
                // errors.value = e.response.data.errors;
                console.log(e.response.data.errors);
            }
        }
    }
    const getIcons = async () => {
        let response = await axios.get(`/api/get-icons`);
        icons.value = response.data;
    }

    const destroyIcon = async (id) => {
        await axios.delete("/api/delete-icon/" + id);
    };
    return {
        destinations,
        getDestinations, addGallery, updateIcons, icons, getIcons, destroyIcon
    };
}
