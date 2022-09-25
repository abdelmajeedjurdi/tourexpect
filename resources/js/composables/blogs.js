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
    const pagenation = ref([])
    const pages = ref([])

    const getBlogs = async (page) => {
        let response = await axios.get(`/api/blogs?page=${page}`);
        blogs.value = response.data.data;
        pages.value = response.data.meta
        // blogs.value.content_en = JSON.parse(blogs.value.content_en)
    };
    const getFilteredBlogs = async (filter) => {
        console.log(filter);
        let response = await axios.get(`/api/filtered-blogs?d=${filter.destination}&c=${filter.category}&page=${filter.page}`);
        console.log(response.data);
        blogs.value = response.data.data;
        pagenation.value = response.data

        console.log(response.data);
        // blogs.value.content_en = JSON.parse(blogs.value.content_en)
    };
    const getBlog = async (id) => {
        let response = await axios.get("/api/blogs/" + id);
        blog.value = response.data.data;
        blog.value.content_en = JSON.parse(blog.value.content_en)
        blog.value.content_ar = JSON.parse(blog.value.content_ar)
    };
    const getSingleBlog = async (slug) => {
        let response = await axios.get("/api/single-blog/" + slug);
        blog.value = response.data.data;
        blog.value.content_en = JSON.parse(blog.value.content_en)
        blog.value.content_ar = JSON.parse(blog.value.content_ar)
    };
    const getBlogDetails = async (slug) => {
        let response = await axios.get("/api/blog/" + slug);
        blog.value = response.data.blog;
        tours.value = response.data.tours;
    };

    const storeBlog = async (data) => {
        let fd = new FormData();
        fd.append("category_id", data.form.category_id);
        fd.append("destination_id", data.form.destination_id);
        fd.append("title_en", data.form.title_en);
        fd.append("title_ar", data.form.title_ar);
        fd.append("preview_text_en", data.form.preview_text_en);
        fd.append("preview_text_ar", data.form.preview_text_ar);
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
        let fd = new FormData();
        fd.append("_method", "patch");
        fd.append("category_id", data.form.category_id);
        fd.append("destination_id", data.form.destination_id);
        fd.append("title_en", data.form.title_en);
        fd.append("title_ar", data.form.title_ar);
        fd.append("preview_text_en", data.form.preview_text_en);
        fd.append("preview_text_ar", data.form.preview_text_ar);
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

    const dublicate = async (id) => {
        await axios.post("/api/blog/dublicate/" + id);
    }

    return {
        blogs,
        blog, dublicate,
        errors,
        getBlogs,
        getBlog,
        storeBlog,
        updateBlog,
        destroyBlog,
        slides,
        getBlogDetails, getFilteredBlogs,
        tours, pagenation, pages, getSingleBlog
    };



}
