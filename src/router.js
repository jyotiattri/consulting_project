import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../src/assets/Home.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", page: Home },
  { path: "/BlogComponent", component: BlogComponent },
];

export default new VueRouter({
  mode: "history",
  routes
});