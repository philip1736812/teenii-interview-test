// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Cocoa Seed",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
        },
      ],
    },
  },

  css: [
    // "primeflex/primeflex.css",
    "primevue/resources/themes/lara-light-green/theme.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
    "~/assets/css/main.css",
    "primeicons/primeicons.css",
  ],
  plugins: ["~/plugins/primevue-config.ts", "~/plugins/fontawesome.js"],
  ssr: false,

  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-primevue"],
  primevue: {
    usePrimeVue: true,
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
  },
  router: {
    options: {
      hashMode: true,
      scrollBehaviorType: "smooth",
    },
  },
  buildModules: ["@nuxt/fontawesome"],
  fontawesome: {
    icons: {
      solid: true,
      brands: true,
      regular: true,
    },
  },
});
