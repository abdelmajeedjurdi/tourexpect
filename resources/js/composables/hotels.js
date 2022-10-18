import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default function useHotels() {
    const hotels = ref([]);
    const hotel = ref([]);
    const room = ref([]);
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

    const getHotels = async (page) => {
        let response = await axios.get(`/api/hotels?page=${page}`);
        hotels.value = response.data.data;
        pages.value = response.data.meta
    };
    const getAllHotels = async (page) => {
        let response = await axios.get(`/api/all-hotels?page=${page}`);
        hotels.value = response.data.data;
        pages.value = response.data.meta
        console.log(pages.value);
    };
    const getDestinationHotels = async (page, destination, subdestination = null) => {
        let response = await axios.get(`/api/destination-hotels?page=${page}&destination=${destination}&subdestination=${subdestination}`);
        hotels.value = response.data.data;
        pages.value = response.data.meta
        alter_pages.value['current_page'] = response.data['current_page']
        alter_pages.value['last_page'] = response.data['last_page']
        alter_pages.value['from'] = response.data['from']
        alter_pages.value['links'] = response.data['links']
        alter_pages.value['to'] = response.data['to']
        alter_pages.value['total'] = response.data['total']
        alter_pages.value['path'] = response.data['path']
        console.log(response.data);

    };

    const getHotel = async (id) => {

        let response = await axios.get("/api/hotels/" + id);
        hotel.value = response.data.data;
        hotel.value['facilities'] = JSON.parse(hotel.value['facilities'])
    };
    const getHotelDetails = async (slug) => {
        let response = await axios.get("/api/hotel/" + slug);
        hotel.value = response.data.data;
    };

    const storeHotel = async (data) => {
        fd.append("category_id", data.form.category_id);
        fd.append("destination_id", data.form.destination_id);
        fd.append("title_en", data.form.title_en);
        fd.append("title_ar", data.form.title_ar);
        fd.append("description_en", data.form.description_en);
        fd.append("description_ar", data.form.description_ar);
        fd.append("hotel_img", data.form.image);
        fd.append("address_ar", data.form.address_ar);
        fd.append("address_en", data.form.address_en);
        fd.append("active", data.form.active);
        fd.append("price", data.form.price);
        fd.append("discount", data.form.discount);
        fd.append("discount_type", data.form.discount_type);
        fd.append("stars", data.form.stars);
        fd.append("source", data.form.source);
        fd.append("facilities", JSON.stringify(data.form.facilities));


        fd.append("image", data.file);


        fd.append("properties", JSON.stringify(data.properties));
        errors.value = "";
        try {
            let response = await axios.post("/api/hotels", fd, {
                onUploadProgress: function (progressEvent) {
                    percentage.value = parseInt(
                        Math.round(
                            (progressEvent.loaded / progressEvent.total) * 100
                        )
                    );
                },
            });
            console.log(response);
            await router.push({ name: "hotel.details", params: { id: response.data } });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };



    const storeRoom = async (data) => {
        fd.append("name_en", data.form.name_en);
        fd.append("name_ar", data.form.name_ar);
        fd.append("hotel_id", data.form.hotel_id);
        fd.append("image", data.file);

        errors.value = "";
        try {
            let response = await axios.post("/api/rooms", fd, {
                onUploadProgress: function (progressEvent) {
                    percentage.value = parseInt(
                        Math.round(
                            (progressEvent.loaded / progressEvent.total) * 100
                        )
                    );
                },
            });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };
    const getRoom = async (id) => {
        let response = await axios.get("/api/rooms/" + id);
        room.value = response.data;
        console.log(response);
    }
    const deleteRoom = async (id) => {
        await axios.delete("/api/rooms/" + id);
    }
    const updateRoom = async (data) => {
        console.log('editnigjlsdf');
        fd.append("_method", "patch");
        fd.append("id", data.form.id);
        fd.append("name_en", data.form.name_en);
        fd.append("name_ar", data.form.name_ar);
        fd.append("room_img", data.form.image);
        fd.append("hotel_id", data.form.hotel_id);
        fd.append("new_image", data.file);
        try {
            await axios.post("/api/rooms/" + data.form.id, fd, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                onUploadProgress: function (progressEvent) {
                    percentage.value = parseInt(
                        Math.round(
                            (progressEvent.loaded / progressEvent.total) * 100
                        )
                    );
                },
            });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    }
    const updateHotel = async (id, data) => {
        fd.append("_method", "patch");
        fd.append("category_id", data.form.category_id);
        fd.append("destination_id", data.form.destination_id);
        fd.append("title_en", data.form.title_en);
        fd.append("title_ar", data.form.title_ar);
        fd.append("description_en", data.form.description_en);
        fd.append("description_ar", data.form.description_ar);
        fd.append("address_ar", data.form.address_ar);
        fd.append("address_en", data.form.address_en);
        fd.append("active", data.form.active);
        fd.append("price", data.form.price);
        fd.append("discount", data.form.discount);
        fd.append("discount_type", data.form.discount_type);
        fd.append("stars", data.form.stars);
        fd.append("source", data.form.source);
        fd.append("facilities", data.form.facilities);
        fd.append("hotel_img", data.form.thumbnail);
        fd.append("new_image", data.file);
        errors.value = "";
        try {
            await axios.post("/api/hotels/" + id, fd, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                onUploadProgress: function (progressEvent) {
                    percentage.value = parseInt(
                        Math.round(
                            (progressEvent.loaded / progressEvent.total) * 100
                        )
                    );
                },
            });
            await router.push({ name: "hotels.index" });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const deleteProperty = async (id) => {
        await axios.delete("/api/cat-property/" + id);
    };
    const destroyHotel = async (id) => {
        await axios.delete("/api/hotels/" + id);
    };
    const addGallery = async (images) => {
        for (var i = 0; i < images.length; i++) {
            let file = images[i];
            fd.append("images[" + i + "]", file);
        }
    };
    const addFiles = async (files) => {
        for (var i = 0; i < files.length; i++) {
            let file = files[i];
            fd.append("files[" + i + "]", file);
        }
    };
    const destroyImage = async (id) => {
        await axios.delete("/api/delete-hotel-image/" + id);
    };
    const destroyFile = async (id) => {
        await axios.delete("/api/delete-file/" + id);
    };

    const dublicate = async (id) => {
        await axios.post("/api/hotel/dublicate/" + id);
    }
    return {
        hotels, dublicate,
        hotel,
        errors,
        getHotels,
        getHotel,
        storeHotel,
        updateHotel,
        destroyHotel,
        deleteProperty,
        addGallery,
        addFiles,
        getHotelDetails,
        destroyImage,
        destroyFile, getDestinationHotels,
        percentage, pages, getAllHotels, alter_pages, storeRoom, getRoom, room, updateRoom, deleteRoom
    };
}
