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

    const getSession = async (amount, name, customer_email) => {
        let response = await axios.post(`/api/get-session`, { 'amount': amount, 'name': name, 'customer_email': customer_email });
        session_id.value = response.data.id;
    }

    const applyToVisa = async (form) => {

        fd.append("name", form.name);
        fd.append("surname", form.surname);
        fd.append("email", form.email);
        fd.append("phone", form.phone);
        fd.append("passport_no", form.passport_no);
        fd.append("travel_on", form.travel_on);
        fd.append("country", form.country);
        fd.append("nationality", form.nationality);
        fd.append("visa_type", form.visa_type);

        try {
            return await axios.post("/api/visa-application", fd);
        } catch (e) {
            if (e.response.status === 422) {
                console.log(e);
            }
        }

    }

    const destroyIcon = async (id) => {
        await axios.delete("/api/delete-icon/" + id);
    };

    const inquire = async (form) => {
        return await axios.post("/api/inquire", form);

    }

    const addFiles = async (file_name, file) => {
        fd.append(file_name, file);
    };
    return {
        destinations,
        getDestinations,
        addGallery,
        updateIcons,
        icons,
        getIcons,
        destroyIcon,
        inquire,
        getSession,
        session_id,
        applyToVisa,
        addFiles
    };
}
