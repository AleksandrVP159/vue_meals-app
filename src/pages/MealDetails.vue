<template>
    <div class="max-w-[800px] mx-auto p-8">
        <h1 class="text-4xl font-bold mb-5 text-orange-500">{{ detailMeals.strMeal }}</h1>
        <img :src="detailMeals.strMealThumb" :alt="detailMeals.strMeal" class="max-w-[100%]">
        <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
            <div>
                <strong class="font-bold">Category:</strong> {{ detailMeals.strCategory }}
            </div>
            <div>
                <strong class="font-bold">Area:</strong> {{ detailMeals.strArea }}
            </div>
            <div>
                <strong class="font-bold">Tags:</strong> {{ detailMeals.strTags }}
            </div>
        </div>

        <div class="my-3">
            {{ detailMeals.strInstructions }}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2">
            <div>
                <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
                <ul>
                    <template v-for="(el, ind) of new Array(20)">
                        <li v-if="detailMeals[`strIngredient${ind + 1}`]">
                            {{ ind + 1 }}. {{ detailMeals[`strIngredient${ind + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
            <div>
                <h2 class="text-2xl font-semibold mb-2">Measures</h2>
                <ul>
                    <template v-for="(el, ind) of new Array(20)">
                        <li v-if="detailMeals[`strMeasure${ind + 1}`]">
                            {{ ind + 1 }}. {{ detailMeals[`strMeasure${ind + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
            <div class="mt-4">
                <YouTubeButton :href="detailMeals.strYoutube" />
                <a :href="detailMeals.strSource" target="_blank"
                    class="ml-3 px-3 py-2 rounded border-2 border-transparent text-indigo-600 transition-colors">
                    View Original Source
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router';
import YouTubeButton from '@/components/YouTubeButton.vue';

import { useMealsStore } from "../store/mealsStore.js";

const store = useMealsStore()
const detailMeals = computed(() => store.detailMeals)

const route = useRoute()

onMounted(() => {
    store.searchMealsDetail(route)
})

</script>