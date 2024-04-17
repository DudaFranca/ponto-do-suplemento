import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import ProductList from "../views/ProductList.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/produtos/:categoryId",
    name: "ProductList",
    component: ProductList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;