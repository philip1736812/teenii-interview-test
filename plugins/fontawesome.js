import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";

// Set autoAddCss before importing any icons
config.autoAddCss = false;

// Add icons to the library
library.add(faQuestion, faEthereum);

export default defineNuxtPlugin((nuxtApp) => {
  // Register the FontAwesomeIcon component globally
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
