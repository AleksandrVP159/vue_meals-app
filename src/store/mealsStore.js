import { defineStore } from "pinia";
import axiosClient from "@/axios";

export const useMealsStore = defineStore("meals", {
  state: () => ({
    searchedMeals: [],
    mealsByLetter: [],
    mealsByIngredient: [],
    ingredients: [],
    homeMeals: [],
    detailMeals: {},
  }),

  actions: {
    async searchMeals(keyword) {
      await axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
        this.searchedMeals.push(data.meals);
      });
    },
    async searchMealsByLetter(letter) {
      await axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
        this.mealsByLetter.push(data.meals);
      });
    },
    async searchMealsByIngredient(ing) {
      await axiosClient.get(`filter.php?i=${ing}`).then(({ data }) => {
        this.mealsByIngredient.push(data.meals);
      });
    },
    async searchMealsHome() {
      for (let i = 0; i < 9; i++) {
        await axiosClient.get("random.php").then(({ data }) => {
          this.homeMeals.push(data.meals);
        });
      }
    },
    async loadMoreMealsHome() {
      await axiosClient.get("random.php").then(({ data }) => {
        this.homeMeals = [...this.homeMeals, ...data.meals];
      });
    },
    async searchMealsDetail(route) {
      await axiosClient
        .get(`lookup.php?i=${route.params.id}`)
        .then(({ data }) => {
          this.detailMeals = data.meals[0] || {};
        });
    },
    async searchIngredient() {
      await axiosClient.get("list.php?i=list").then(({ data }) => {
        this.ingredients = data.meals;
      });
    },
  },
  getters: {
    computedIngredients: (state) => {
      return (keyword) => {
        state.ingredients.filter((i) =>
          i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
        );
      };
    },
  },
});
