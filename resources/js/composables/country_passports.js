import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default function useCountryPassports() {
    const router = useRouter();
    const errors = ref("");
    const country_passports = ref([]);
    const country_passport = ref([]);
    const pages = ref([])

    let fd = new FormData();

    const getCountryPassports = async () => {
        let response = await axios.get("/api/country_passports");
        country_passports.value = response.data;
    };

    const getCountryPassport = async (id) => {
        let response = await axios.get("/api/country_passports/" + id);
        country_passport.value = response.data;
    };


    const storeCountryPassport = async (data) => {
        fd.append("name_en", data.name_en);
        fd.append("name_ar", data.name_ar);
        errors.value = "";
        try {
            await axios.post("/api/country_passports", fd);
            getCountryPassports()
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const updateCountryPassport = async (data) => {
        fd.append("_method", "patch");
        fd.append("name_en", data.name_en);
        fd.append("name_ar", data.name_ar);
        errors.value = "";
        try {
            await axios.post("/api/country_passports/" + data.id, fd, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },

            });
            getCountryPassports()
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const destroyCountryPassport = async (id) => {
        await axios.delete("/api/country_passports/" + id);
        getCountryPassports()
    };
    return {
        getCountryPassports, getCountryPassport, storeCountryPassport, updateCountryPassport, destroyCountryPassport, country_passports, getCountryPassport, country_passport
    };
}
