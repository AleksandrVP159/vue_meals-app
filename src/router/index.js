import { createRouter, createWebHistory } from "vue-router";

import GuestLayout from "@/components/GuestLayout.vue";
import Home from "@/pages/Home.vue";
import MealsByLetter from "@/pages/MealsByLetter.vue";
import MealsByName from "@/pages/MealsByName.vue";
import MealDetails from "@/pages/MealDetails.vue";
import Ingredients from "@/pages/Ingredients.vue";
import MealsByIngredient from "@/pages/MealsByIngredient.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/by-name/:name?",
      name: "byName",
      component: MealsByName,
    },
    {
      path: "/by-letter/:letter?",
      name: "byLetter",
      component: MealsByLetter,
    },
    {
      path: "/ingredients",
      name: "ingredients",
      component: Ingredients,
    },
    {
      path: "/by-ingredient/:ingredient",
      name: "byIngredient",
      component: MealsByIngredient,
    },
    {
      path: "/meal/:id",
      name: "mealDetails",
      component: MealDetails,
    },
    {
      path: "/guest",
      component: GuestLayout,
    },
  ],
  linkActiveClass: "active",
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});
export default router;
