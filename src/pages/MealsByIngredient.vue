<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals for {{ ingredients.strIngredient }}</h1>
  </div>

  <Meals v-for="meals in mealsByIngredient" :meals="meals" />
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import Meals from "@/components/Meals.vue";
import { useMealsStore } from "../store/mealsStore.js";

const store = useMealsStore()

const ingredients = computed(() => store.ingredients)
const mealsByIngredient = computed(() => store.mealsByIngredient)

const route = useRoute();

onMounted(() => {
  store.searchMealsByIngredient(route.params.ingredient)
})

</script>
