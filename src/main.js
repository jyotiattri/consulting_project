import Vue from "vue";
import App from "./App.vue";
// import jquery from "jquery";
import "popper.js";
// import Bootstrap from "bootstrap";
import "bootstrap/dist/js/bootstrap";
import router from './router';

import { library } from "@fortawesome/fontawesome-svg-core";
import { faClock} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faLinkedin, faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faClock);
library.add(faFacebook);
library.add(faTwitter);
library.add(faLinkedin);
library.add(faGooglePlus);

Vue.component("font-awesome-icon", FontAwesomeIcon);


Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
