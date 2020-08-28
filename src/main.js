// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";

import VueScrollTo from "vue-scrollto";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faAlignRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faAlignRight, faEnvelope, faGithub, faLinkedin);

export default function(Vue, { router, head, isClient }) {
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap",
  });

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component("font-awesome-icon", FontAwesomeIcon);

  Vue.use(VueScrollTo);
}
