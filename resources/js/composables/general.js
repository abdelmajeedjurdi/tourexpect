import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default function useGeneral() {
    const destinations = ref([]);
    const router = useRouter();
    let fd = new FormData();
    let icons = ref([])
    let session_id = ref(null)

    const getDestinations = async (page) => {
        let response = await axios.get(`/api/nav-destination`);
        destinations.value = response.data;
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
            }
        }
    }
    const getIcons = async () => {
        let response = await axios.get(`/api/get-icons`);
        icons.value = response.data;
    }

    const getSession = async (amount, name) => {
        let response = await axios.post(`/api/get-session`, { 'amount': amount, 'name': name });
        session_id.value = response.data.id;
    }

    const applyToVisa = async (form) => {
        return await axios.post("/api/visa-application", form);

    }

    const destroyIcon = async (id) => {
        await axios.delete("/api/delete-icon/" + id);
    };

    const inquire = async (form) => {
        return await axios.post("/api/inquire", form);

    }
    return {
        destinations,
        getDestinations,
        addGallery,
        updateIcons,
        icons,
        getIcons,
        destroyIcon,
        inquire,
        getSession, session_id, applyToVisa
    };
}
