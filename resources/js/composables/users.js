import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default function useUsers() {
    const users = ref([]);
    const user = ref([]);
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

    const getUsers = async (page) => {
        let response = await axios.get(`/api/users?page=${page}`);
        console.log(users.value);
        users.value = response.data;
        // pages.value = response.data.meta
    };


    const getUser = async (id) => {
        let response = await axios.get("/api/users/" + id);
        console.log(response);
        user.value = response.data;
    };


    const storeUser = async (data) => {
        fd.append("name", data.name);
        fd.append("email", data.email);
        fd.append("password", data.password);
        fd.append("role", data.role);
        console.log(data);
        errors.value = "";
        try {
            await axios.post("/api/users", fd);
            getUsers()
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const updateUser = async (data) => {
        fd.append("_method", "patch");
        fd.append("name", data.name);
        fd.append("email", data.email);
        fd.append("password", data.password);
        fd.append("role", data.role);
        errors.value = "";
        try {
            await axios.post("/api/users/" + data.id, fd, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },

            });
            getUsers()
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const destroyUser = async (id) => {
        await axios.delete("/api/users/" + id);
        getUsers()
    };

    const duplicate = async (id) => {
        await axios.post("/api/user/dublicate/" + id);
    }
    return {
        users, duplicate,
        user,
        errors,
        getUsers,
        getUser,
        storeUser,
        updateUser,
        destroyUser,
        percentage, pages,
    };
}
