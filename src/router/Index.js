import { createRouter, createWebHistory } from "vue-router";
import TheContainer from "@/components/pages/TheContainer.vue";

const route = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: TheContainer }],
});
export default route;
