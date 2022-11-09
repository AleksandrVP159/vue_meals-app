<template>
    <div class="p-8 pb-0 text-orange-500">
        <h1 class="text-4xl font-bold mb-4">Random Meals</h1>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
        <Meals v-for="meals in homeMeals" :meals="meals" />
    </div>
    <div v-intersection="store.searchMealsHome" class="observer"></div>
    <template v-if="detectForScroll">
        <ButtonScrollTop @scroll-top="scrollToTop" />
    </template>

</template>
  
<script setup>
import { onMounted, computed } from "vue";
import Meals from "@/components/Meals.vue";

import { useMealsStore } from "../store/mealsStore.js";

const store = useMealsStore()
const homeMeals = computed(() => store.homeMeals)

function scrollToTop() {
    window.scrollTo(0, 0)
    store.$reset()
}

const detectForScroll = computed(() => {
    return Boolean(homeMeals.value.length > 9)
})


onMounted(() => {
    store.searchMealsHome
});
</script>
  