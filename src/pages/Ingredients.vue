<template>
    <div class="p-8 pb-0">
        <h1 class="text-4xl font-bold mb-4 text-orange-500">Ingredients</h1>
    </div>
    <div class="px-8">
        <input type="text" v-model="keyword"
            class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 mb-3 w-full"
            placeholder="Search for Ingredients" />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <a href="#" @click.prevent="openIngredient(ingredient)"
                v-for="ingredient in store.computedIngredients(keyword)" :key="ingredient.idIngredient"
                class="block bg-white rounded p-3 mb-3 shadow">
                <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
            </a>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useMealsStore } from "../store/mealsStore.js";
import { useRouter } from "vue-router";

const router = useRouter()
const store = useMealsStore()

const keyword = ref('')

function openIngredient(ingredient) {
    router.push({
        name: 'byIngredient',
        params: {
            ingredient: ingredient.strIngredient
        }
    })
}

onMounted(() => {
    store.searchIngredient()
})



</script>