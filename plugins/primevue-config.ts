import PrimeVue from "primevue/config";

import InputSwitch from "primevue/inputswitch";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.component("InputSwitch", InputSwitch);
});
