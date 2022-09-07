import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default function useBlogs() {
    const blogs = ref([]);
    const blog = ref([]);
    const slides = ref([]);
    const router = useRouter();
    const errors = ref("");
    const tours = ref([]);

    const getBlogs = async () => {
        let response = await axios.get("/api/blogs");
        blogs.value = response.data.data;
        // blogs.value.content_en = JSON.parse(blogs.value.content_en)
    };
    const getBlog = async (id) => {
        let response = await axios.get("/api/blogs/" + id);
        blog.value = response.data.data;
        blog.value.content_en = JSON.parse(blog.value.content_en)
        blog.value.content_ar = JSON.parse(blog.value.content_ar)
    };
    const getBlogDetails = async (slug) => {
        let response = await axios.get("/api/blog/" + slug);
        console.log(response.data);
        blog.value = response.data.blog;
        tours.value = response.data.tours;
    };

    const storeBlog = async (data) => {
        console.log(data);
        let fd = new FormData();
        fd.append("category_id", data.form.category_id);
        fd.append("title_en", data.form.title_en);
        fd.append("title_ar", data.form.title_ar);
        fd.append("content_en", JSON.stringify(data.form.content_en));
        fd.append("content_ar", JSON.stringify(data.form.content_ar));
        fd.append("blog_img", data.form.image);
        fd.append("image", data.file);
        errors.value = "";
        try {
            await axios.post("/api/blogs", fd, {
                onUploadProgress: function (progressEvent) {
                    // uploadPercentage = parseInt(
                    //     Math.round(
                    //         (progressEvent.loaded / progressEvent.total) * 100
                    //     )
                    // );
                    console.log(
                        Math.round(
                            (progressEvent.loaded / progressEvent.total) * 100
                        )
                    );
                },
            });
            await router.push({ name: "blogs.index" });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const updateBlog = async (id, data) => {
        console.log(data);
        let fd = new FormData();
        fd.append("_method", "patch");
        fd.append("category_id", data.form.category_id);
        fd.append("title_en", data.form.title_en);
        fd.append("title_ar", data.form.title_ar);
        fd.append("content_en", JSON.stringify(data.form.content_en));
        fd.append("content_ar", JSON.stringify(data.form.content_ar));
        fd.append("blog_img", data.form.image);
        fd.append("new_image", data.file);

        errors.value = "";
        try {
            await axios.post("/api/blogs/" + id, fd, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            await router.push({ name: "blogs.index" });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const destroyBlog = async (id) => {
        await axios.delete("/api/blogs/" + id);
    };

    return {
        blogs,
        blog,
        errors,
        getBlogs,
        getBlog,
        storeBlog,
        updateBlog,
        destroyBlog,
        slides,
        getBlogDetails,
        tours
    };
}
