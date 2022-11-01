<template>
    <div class="p-8 pb-0">
        <h1 class="text-4xl font-bold mb-4 text-orange-500">Search Meals by Name</h1>
    </div>
    <div class="px-8 pb-3">
        <input type="text" v-model="keyword"
            class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full"
            placeholder="Search for Meals" @change="onSearchMeals" />
    </div>

    <Meals v-for="meals in searchedMeals" :meals="meals" />
</template>

<script setup>
import Meals from "@/components/Meals.vue";
import { onMounted, ref, computed } from "vue";
import { useRoute } from "vue-router";

import { useMealsStore } from "../store/mealsStore.js";

const store = useMealsStore()
const searchedMeals = computed(() => store.searchedMeals)

const route = useRoute()

const keyword = ref('')

function onSearchMeals() {
    if (keyword.value) {
        store.searchMeals(keyword.value)
    }
}

onMounted(() => {
    keyword.value = route.params.name
    if (keyword.value) {
        onSearchMeals()
    }
})
</script>