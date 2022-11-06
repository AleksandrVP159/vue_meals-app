<template>
    <div class="p-8 pb-0">
        <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals by Letter</h1>
    </div>
    <div class="flex flex-wrap justify-center gap-3 px-8 mb-6">
        <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter of letters" :key="letter"
            class="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">
            {{ letter }}
        </router-link>
    </div>

    <Meals v-for="meals in mealsByLetter" :meals="meals" />
</template>

<script setup>
import Meals from "@/components/Meals.vue";
import { watch, computed } from "vue";
import { useRoute } from "vue-router";

import { useMealsStore } from "../store/mealsStore.js";

const store = useMealsStore()
const mealsByLetter = computed(() => store.mealsByLetter)

const route = useRoute()

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

watch(route, () => {
    store.$reset()
    store.searchMealsByLetter(route.params.letter)
})


</script>