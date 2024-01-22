import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  // https://router.vuejs.org/api/interfaces/routeroptions.html

  routes: (_routes) => [
    {
      path: "/",
      name: "index",
      component: () => import("~/pages/index.vue"),
    },
  ],
};
