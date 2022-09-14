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

    const getBlogs = async () => {
        let response = await axios.get("/api/blogs");
        blogs.value = response.data.data;
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
            // await router.push({ name: "blogs.index" });
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
        getBlogDetails, getFilteredBlogs,
        tours, pagenation
    };

    // ffffffffffffffffffffffffffffffffff

    let p = {
        "links": {
            "first": "http://127.0.0.1:8000/api/filtered-blogs?page=1",
            "last": "http://127.0.0.1:8000/api/filtered-blogs?page=2",
            "prev": null, "next": "http://127.0.0.1:8000/api/filtered-blogs?page=2"
        },
        "meta": {
            "current_page": 1,
            "from": 1,
            "last_page": 2,
            "links": [
                {
                    "url": null,
                    "label": "&laquo; Previous",
                    "active": false
                },
                {
                    "url": "http://127.0.0.1:8000/api/filtered-blogs?page=1",
                    "label": "1", "active": true
                },
                {
                    "url": "http://127.0.0.1:8000/api/filtered-blogs?page=2",
                    "label": "2",
                    "active": false
                }, {
                    "url": "http://127.0.0.1:8000/api/filtered-blogs?page=2",
                    "label": "Next &raquo;",
                    "active": false
                }],
            "path": "http://127.0.0.1:8000/api/filtered-blogs",
            "per_page": 3,
            "to": 3,
            "total": 6
        }
    }

}
