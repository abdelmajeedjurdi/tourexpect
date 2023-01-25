<template>
    <div class="w-full">
        <h3>Test 1</h3>
        <div class="p-20 flex">
            <div class="mx-3">{{ tours }}</div>
        </div>
        <router-link to="/test2" class="px-5 bg-blue-400 text-blue-800"
            >go</router-link
        >
    </div>
</template>
<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
store.dispatch("fetchTours");
const tours = computed(() => store.state.tours);
</script>
