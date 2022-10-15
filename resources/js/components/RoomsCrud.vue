<template>
    <div>
        <div>
            <!-- Adding Room -->
            <div class="absolute w-11/12 z-10 " v-if="isAddingRoom==true">
                <form class="space-y-6 w-1/2 mx-auto bg-gray-600 p-4 shadow" @submit.prevent="saveRoom"
                    v-click-outside="()=>isAddingRoom=false">
                    <div class="lg:flex justify-between space-x-4">
                        <div class="space-y-4 rounded-md w-full">
                            <!-- title -->
                            <div class="flex justify-between">

                                <div class="w-full me-2">
                                    <label for="title_en"
                                        class="block text-sm font-medium text-gray-700 dark:text-gray-200">English
                                        Title</label>
                                    <div class="mt-1">
                                        <input type="text" name="title_en" id="title_en" class="
                                                block
                                                mt-1
                                                w-full
                                                rounded-md
                                                border-gray-500
                                                shadow-sm
                                                focus:border-indigo-300
                                                focus:ring
                                                focus:ring-indigo-200
                                                focus:ring-opacity-50
                                                dark:bg-gray-800
                                                " v-model="form.name_en" />
                                    </div>
                                </div>
                                <div class="w-full">
                                    <label for="title_ar"
                                        class="block text-sm font-medium text-gray-700 dark:text-gray-200">Arabic
                                        Title</label>
                                    <div class="mt-1">
                                        <input dir="rtl" type="text" name="title_ar" id="title_ar" class="
                                                        block
                                                        mt-1
                                                        w-full
                                                        rounded-md
                                                        border-gray-500
                                                        shadow-sm
                                                        focus:border-indigo-300
                                                        focus:ring
                                                        focus:ring-indigo-200
                                                        focus:ring-opacity-50
                                                        dark:bg-gray-800
                                                        " v-model="form.name_ar" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="flex w-full mt-2" v-if="imagePreview">
                                    <img :src="imagePreview" alt="" class="figure-img img-fluid rounded"
                                        style="max-height: 100px" />
                                </div>
                                <div class="flex flex-col mt-2">
                                    <input class="
                                                        w-100
                                                        mt-2
                                                        py-3
                                                        px-3
                                                        rounded-lg
                                                        bg-white
                                                        dark:bg-gray-800
                                                        border border-gray-400
                                                        dark:border-gray-700
                                                        text-gray-800
                                                        dark:text-gray-50
                                                        font-semibold
                                                        focus:border-blue-500 focus:outline-none
                                                        hidden
                                                        " @change="onFileSelected" type="file" id="image"
                                        accept="image/*" />
                                    <label for="image" class="w-100 flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-12 cursor-pointer" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span class="my-auto text-gray-200">Select thumbnail</span>
                                    </label>
                                </div>
                            </div>

                        </div>

                    </div>
                    <button type="submit" class="
                                            inline-flex
                                            items-center
                                            px-4
                                            py-2
                                            text-xs
                                            font-semibold
                                            tracking-widest
                                            text-white
                                            uppercase
                                            bg-gray-800
                                            rounded-md
                                            border border-transparent
                                            ring-gray-300
                                            transition
                                            duration-150
                                            ease-in-out
                                            hover:bg-gray-700
                                            active:bg-gray-900
                                            focus:outline-none focus:border-gray-900 focus:ring
                                            disabled:opacity-25
                                        ">
                        Create
                    </button>
                </form>
            </div>

            <!-- Editing Room -->
            <div class="absolute w-11/12 z-10" v-if="isEditingRoom==true">

                <form class="space-y-6 w-1/2 mx-auto bg-gray-600 p-4 shadow" @submit.prevent="saveRoom"
                    v-click-outside="()=>isEditingRoom=false">
                    <div class="lg:flex justify-between space-x-4">
                        <div class="space-y-4 rounded-md w-full">
                            <!-- title -->
                            <div class="flex justify-between">

                                <div class="w-full me-2">
                                    <label for="title_en"
                                        class="block text-sm font-medium text-gray-700 dark:text-gray-200">English
                                        Title</label>
                                    <div class="mt-1">
                                        <input type="text" name="title_en" id="title_en" class="
                                                        block
                                                        mt-1
                                                        w-full
                                                        rounded-md
                                                        border-gray-500
                                                        shadow-sm
                                                        focus:border-indigo-300
                                                        focus:ring
                                                        focus:ring-indigo-200
                                                        focus:ring-opacity-50
                                                        dark:bg-gray-800
                                                        " v-model="room.name_en" />
                                    </div>
                                </div>
                                <div class="w-full">
                                    <label for="title_ar"
                                        class="block text-sm font-medium text-gray-700 dark:text-gray-200">Arabic
                                        Title</label>
                                    <div class="mt-1">
                                        <input dir="rtl" type="text" name="title_ar" id="title_ar" class="
                                                                block
                                                                mt-1
                                                                w-full
                                                                rounded-md
                                                                border-gray-500
                                                                shadow-sm
                                                                focus:border-indigo-300
                                                                focus:ring
                                                                focus:ring-indigo-200
                                                                focus:ring-opacity-50
                                                                dark:bg-gray-800
                                                                " v-model="room.name_ar" />
                                    </div>
                                </div>
                            </div>
                            <div class="flex w-full justify-start mt-2" v-if="room.image != undefined">
                                <img :src="
                                    imagePreview != null
                                        ? imagePreview
                                        : '/images/rooms/' + room.image
                                " alt="" class="figure-img img-fluid rounded" style="max-height: 100px" />
                            </div>

                            <div class="flex flex-col mt-2">
                                <input class="
                                                        w-100
                                                        mt-2
                                                        py-3
                                                        px-3
                                                        rounded-lg
                                                        bg-white
                                                        dark:bg-gray-800
                                                        border border-gray-400
                                                        dark:border-gray-700
                                                        text-gray-800
                                                        dark:text-gray-50
                                                        font-semibold
                                                        focus:border-blue-500 focus:outline-none
                                                        hidden
                                                    " @change="onFileSelected" type="file" id="user-image"
                                    accept="image/*" />
                                <label for="user-image" class="w-100 flex justify-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-12 cursor-pointer" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </label>
                            </div>
                        </div>

                    </div>
                    <button type="submit" class="
                                                        inline-flex
                                                        items-center
                                                        px-4
                                                        py-2
                                                        text-xs
                                                        font-semibold
                                                        tracking-widest
                                                        text-white
                                                        uppercase
                                                        bg-gray-800
                                                        rounded-md
                                                        border border-transparent
                                                        ring-gray-300
                                                        transition
                                                        duration-150
                                                        ease-in-out
                                                        hover:bg-gray-700
                                                        active:bg-gray-900
                                                        focus:outline-none focus:border-gray-900 focus:ring
                                                        disabled:opacity-25
                                                    ">
                        Save
                    </button>
                </form>

            </div>


        </div>
        <div class="flex items-center">
            <h3 class="me-4">Rooms</h3>
            <button @click.prevent="isAddingRoom=true"
                class="w-6 h-6 bg-green-300 hover:bg-green-400 duration-500 text-white rounded">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-full">
                    <path fill-rule="evenodd"
                        d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                        clip-rule="evenodd" />
                </svg>

            </button>
        </div>
        <div>
            <div v-if="rooms!=undefined && rooms.length==0">
                <h4>No Room to Show</h4>
            </div>
            <div v-else class="
                        grid
                        gap-2
                        grid-cols-1
                        sm:grid-cols-2
                        md:grid-cols-3
                        lg:grid-cols-4
                        xl:grid-cols-5
                        justify-between
                      ">
                <div v-for="room in rooms" :key="room.id">
                    <div class="bg-white rounded-lg overflow-hidden mb-10">
                        <div class="w-full flex justify-end z-20">
                            <span class="rounded-full p-1 transition-all duration-300 absolute">
                                <div class="btn-group dropend">
                                    <button type="button" class="" data-bs-toggle="dropdown" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                        </svg>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li class="w-full ps-2 hover:bg-gray-300 cursor-pointer"
                                            @click="editRoom(room.id)">
                                            Edit
                                        </li>
                                        <li @click="deleteRow(room.id)"
                                            class="ps-2 w-full text-red-500 hover:bg-gray-300 cursor-pointer">
                                            Delete
                                        </li>
                                    </ul>
                                </div>
                            </span>
                        </div>
                        <img :src="'/images/rooms/' + room.image" :alt="room.name_en + ' image'"
                            class="w-full h-48 object-cover" />
                        <div class="p-2">
                            <span class="text-base text-blue-500">
                                {{ room.name_en }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import useHotels from "../composables/hotels";

const { storeRoom, getRoom, room, updateRoom, deleteRoom } = useHotels()
let props = defineProps({
    rooms: Object,
    hotel_id: String
})
const emit = defineEmits(['edited'])
let isAddingRoom = ref(false)
let isEditingRoom = ref(false)
const saveRoom = async () => {
    if (isAddingRoom.value) {
        console.log('adding');
        await storeRoom({ form: form, file });

        isAddingRoom.value = false
    }
    else {
        console.log('editing');
        await updateRoom({ form: room.value, file });
        isEditingRoom.value = false
    }
    emit('edited')
    form.name_en = ''
    form.name_ar = ''
    form.image = ''
    imagePreview.value = null
};
const deleteRow = async (id) => {
    deleteRoom(id)
    emit('edited')
}
let imagePreview = ref(null);
let file = reactive(null);
function onFileSelected(event) {
    file = event.target.files[0];
    form.image = event.target.files[0].name;
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
        imagePreview.value = event.target.result;
    };
}
let form = reactive({
    name_en: '',
    name_ar: '',
    hotel_id: props.id,
    image: '',
    hotel_id: props.hotel_id
})

const editRoom = (id) => {
    isEditingRoom.value = true
    getRoom(id)
}
</script>
