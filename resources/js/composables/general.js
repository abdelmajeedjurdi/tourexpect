import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default function useGeneral() {
    const destinations = ref([]);
    const router = useRouter();

    const getDestinations = async (page) => {
        let response = await axios.get(`/api/nav-destination`);
        destinations.value = response.data.data;
    };

    return {
        destinations,
        getDestinations,
    };
}
