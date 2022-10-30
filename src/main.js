import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/style/index.css";
import VueSplide from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

createApp(App).use(store).use(router).use(VueSplide).mount("#app");
