<template>
  <div class="overflow-x-auto relative">
    <form @submit.prevent="saveUser">
      <div v-show="is_show_form" class="flex justify-between">
        <div class="w-full me-2">
          <label
            for="email"
            class="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >Name</label
          >
          <div class="mt-1">
            <input
              type="text"
              name="email"
              id="email"
              class="
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
              "
              v-model="new_user.name"
            />
          </div>
        </div>
        <div class="w-full me-2">
          <label
            for="email"
            class="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Email</label
          >
          <div class="mt-1">
            <input
              dir="rtl"
              type="email"
              name="email"
              id="email"
              class="
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
              "
              v-model="new_user.email"
            />
          </div>
        </div>
        <div class="w-full me-2">
          <label
            for="password"
            class="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Password</label
          >
          <div class="mt-1">
            <input
              dir="rtl"
              type="password"
              name="password"
              id="password"
              autocomplete="new-password"
              class="
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
              "
              v-model="new_user.password"
            />
          </div>
        </div>
        <div class="w-full me-2">
          <label
            for="role"
            class="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Role</label
          >
          <div class="mt-1">
            <select
              name="discount_type"
              id="discount_type"
              class="
                w-full
                dark:bg-gray-700
                rounded-md
                text-gray-700
                dark:text-gray-200
              "
              v-model="new_user.role"
            >
              <option class="" value="1">Admin</option>
              <option class="py-4" value="0">User</option>
            </select>
          </div>
        </div>
      </div>
      <div v-show="is_editing" class="flex justify-between">
        <div class="w-full me-2">
          <label
            for="email"
            class="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >Name</label
          >
          <div class="mt-1">
            <input
              type="text"
              name="email"
              id="email"
              class="
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
              "
              v-model="user.name"
            />
          </div>
        </div>
        <div class="w-full me-2">
          <label
            for="email"
            class="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Email</label
          >
          <div class="mt-1">
            <input
              dir="rtl"
              type="email"
              name="email"
              id="email"
              class="
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
              "
              v-model="user.email"
            />
          </div>
        </div>
        <div class="w-full me-2">
          <label
            for="password"
            class="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Password</label
          >
          <div class="mt-1">
            <input
              dir="rtl"
              type="password"
              name="password"
              id="password"
              autocomplete="new-password"
              class="
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
              "
              v-model="user.password"
            />
          </div>
        </div>
        <div class="w-full me-2">
          <label
            for="role"
            class="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Role</label
          >
          <div class="mt-1">
            <select
              name="discount_type"
              id="discount_type"
              class="
                w-full
                dark:bg-gray-700
                rounded-md
                text-gray-700
                dark:text-gray-200
              "
              v-model="user.role"
            >
              <option class="" value="1">Admin</option>
              <option class="py-4" value="0">User</option>
            </select>
          </div>
        </div>
      </div>
      <button
        type="submit"
        class="
          inline-flex
          items-center
          px-4
          py-2
          my-2
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
        "
      >
        {{ is_show_form ? "Create" : is_editing ? "Save" : "New User" }}
      </button>
    </form>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="
          text-xs text-gray-900
          uppercase
          bg-gray-200
          dark:bg-gray-900 dark:text-gray-400
        "
      >
        <tr>
          <th scope="col" class="py-3 px-6">Name</th>
          <th scope="col" class="py-3 px-6">Email</th>
          <th scope="col" class="py-3 px-6">Role</th>
          <th scope="col" class="py-3 px-6">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in users"
          :key="user.id"
          class="bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <th
            scope="row"
            class="
              py-4
              px-6
              font-medium
              text-gray-900
              whitespace-nowrap
              dark:text-white
            "
          >
            {{ user["name"] }}
          </th>
          <td class="py-4 px-6">
            {{ user["email"] }}
          </td>
          <td class="py-4 px-6">
            {{ user["role"] == 1 ? "Admin" : "User" }}
          </td>
          <td class="py-4 px-6">
            <div class="flex mx-2">
              <span
                class="cursor-pointer rotate-90"
                @click="putUserOnEdit(user['id'])"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </span>
              <span
                class="cursor-pointer rotate-90"
                @click="deleteUser(user['id'])"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 text-red-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { onMounted, reactive, ref } from "vue";
import useUsers from "../../../composables/users";
import { useSwal } from "../../../plugins/useSwal.js";

const { users, getUsers, getUser, storeUser, user, updateUser, destroyUser } =
  useUsers();
let Swal = useSwal();

onMounted(() => {
  getUsers();
});
let is_show_form = ref(false);
let is_editing = ref(false);
const saveUser = () => {
  if (is_editing.value) {
    updateUser(user.value);
    is_editing.value = false;
  } else {
    if (is_show_form.value) {
      storeUser(new_user);
      is_show_form.value = false;
    } else {
      is_show_form.value = true;
    }
  }
};
const putUserOnEdit = (id) => {
  getUser(id);
  is_editing.value = true;
  is_show_form.value = false;
};
const deleteUser = (id) => {
  Swal.fire({
    title: "Are you sure?",
    html: "You won't be able to retrieve the user, ",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      await destroyUser(id);
      Swal.fire("Deleted!", "User has been deleted.", "success");
    }
  });
};
let new_user = reactive({ name: "", email: "", password: "", role: 1 });
</script>
