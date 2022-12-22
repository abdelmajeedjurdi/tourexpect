import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default function useJobs() {
    const jobs = ref([]);
    const job = ref([]);
    const router = useRouter();
    const errors = ref("");
    const pages = ref([])
    const alter_pages = ref({
        current_page: null,
        from: null,
        last_page: null,
        links: [],
        path: null,
        per_page: null,
        to: null,
        total: null
    })
    let percentage = ref(0);
    let fd = new FormData();

    const getJobs = async (page) => {
        let response = await axios.get(`/api/jobs?page=${page}`);
        jobs.value = response.data;
        // pages.value = response.data.meta
    };


    const getJob = async (id) => {
        let response = await axios.get("/api/jobs/" + id);
        console.log(response);
        job.value = response.data;
    };


    const storeJob = async (data) => {
        fd.append("title_en", data.title_en);
        fd.append("title_ar", data.title_ar);
        fd.append("subtitle_en", data.subtitle_en);
        fd.append("subtitle_ar", data.subtitle_ar);
        errors.value = "";
        try {
            await axios.post("/api/jobs", fd);
            getJobs()
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const updateJob = async (data) => {
        fd.append("_method", "patch");
        fd.append("title_en", data.title_en);
        fd.append("title_ar", data.title_ar);
        fd.append("subtitle_en", data.subtitle_en);
        fd.append("subtitle_ar", data.subtitle_ar);
        errors.value = "";
        try {
            await axios.post("/api/jobs/" + data.id, fd, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },

            });
            getJobs()
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const destroyJob = async (id) => {
        await axios.delete("/api/jobs/" + id);
        getJobs()
    };

    const duplicate = async (id) => {
        await axios.post("/api/job/duplicate/" + id);
    }
    return {
        jobs, duplicate,
        job,
        errors,
        getJobs,
        getJob,
        storeJob,
        updateJob,
        destroyJob,
        percentage, pages,
    };
}
