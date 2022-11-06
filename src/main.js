import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import directives from "./directives";

import "@/main.css";

const pinia = createPinia();
const app = createApp(App);

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app.use(router);
app.use(pinia);

app.mount("#app");
