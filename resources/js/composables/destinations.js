import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default function useDestinations() {
    const destinations = ref([]);
    const destination = ref([]);
    const router = useRouter();
    const errors = ref("");
    const tours = ref([]);
    const countries = ref([]);
    const country = ref([]);
    const pages = ref([])

    let fd = new FormData();

    const getDestinations = async (page) => {
        let response = await axios.get(`/api/destinations?page=${page}`);
        destinations.value = response.data.data;
        pages.value = response.data.meta
    };

    const getCountries = async () => {
        let response = await axios.get("/api/countries");
        countries.value = response.data;
    };
    const getDestinationsOnCountry = async () => {
        let response = await axios.get("/api/countries-destinations");
        countries.value = response.data.data;
    };

    const getDestination = async (id) => {
        let response = await axios.get("/api/destinations/" + id);
        destination.value = response.data.data;
    };
    const getDestinationDetails = async (slug) => {
        let response = await axios.get("/api/destination/" + slug);
        destination.value = response.data.destination;
        tours.value = response.data.tours;
    };

    const storeDestination = async (data) => {
        let fd = new FormData();
        fd.append("name_en", data.form.name_en);
        fd.append("name_ar", data.form.name_ar);
        fd.append("description_en", data.form.description_en);
        fd.append("description_ar", data.form.description_ar);
        fd.append("country_id", data.form.country_id);
        fd.append("destination_img", data.form.image);
        fd.append("image", data.file);
        errors.value = "";
        try {
            await axios.post("/api/destinations", fd, {
                onUploadProgress: function (progressEvent) {
                    // uploadPercentage = parseInt(
                    //     Math.round(
                    //         (progressEvent.loaded / progressEvent.total) * 100
                    //     )
                    // );
                },
            });
            await router.push({ name: "destinations.index" });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const updateDestination = async (id, data) => {
        let fd = new FormData();
        fd.append("_method", "patch");
        fd.append("destination", 'flag');
        fd.append("name_en", data.form.name_en);
        fd.append("name_ar", data.form.name_ar);
        fd.append("description_en", data.form.description_en);
        fd.append("description_ar", data.form.description_ar);
        fd.append("destination_img", data.form.image);
        fd.append("country_id", data.form.country_id);
        fd.append("new_image", data.file);

        errors.value = "";
        try {
            await axios.post("/api/destinations/" + id, fd, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            await router.push({ name: "destinations.index" });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const deleteProperty = async (id) => {
        await axios.delete("/api/cat-property/" + id);
    };
    const destroyDestination = async (id) => {
        await axios.delete("/api/destinations/" + id);
    };

    const duplicate = async (id) => {
        await axios.post("/api/destination/duplicate/" + id);
    }


    const getCountry = async (id) => {
        let response = await axios.get("/api/countries/" + id);
        console.log(response.data);
        country.value = response.data;
    };


    const storeCountry = async (data) => {
        fd.append("name_en", data.name_en);
        fd.append("name_ar", data.name_ar);
        errors.value = "";
        try {
            await axios.post("/api/countries", fd);
            getCountries()
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const updateCountry = async (data) => {
        fd.append("_method", "patch");
        fd.append("name", data.name);
        fd.append("email", data.email);
        fd.append("password", data.password);
        fd.append("role", data.role);
        errors.value = "";
        try {
            await axios.post("/api/countries/" + data.id, fd, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },

            });
            getCountries()
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const destroyCountry = async (id) => {
        await axios.delete("/api/countries/" + id);
        getCountries()
    };
    return {
        destinations,
        destination,
        errors,
        getDestinations,
        getDestination,
        storeDestination,
        updateDestination,
        destroyDestination,
        deleteProperty,
        getDestinationDetails,
        tours, getDestinationsOnCountry, pages, duplicate,
        getCountry, storeCountry, updateCountry, destroyCountry, countries, getCountries, country
    };
}
