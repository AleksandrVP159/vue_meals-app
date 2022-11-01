<template>
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    <div v-if="!meals.length" class="flex justify-center text-gray-600 p-8">
        There are no meals
    </div>
</template>
  
<script setup>
import MealItem from '@/components/MealItem.vue';

const props = defineProps({
    meals: {
        required: true,
        type: Array,
    }
})

</script>
  