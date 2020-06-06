import Vue from "vue";
import App from "./App.vue";
// import jquery from "jquery";
import "popper.js";
// import Bootstrap from "bootstrap";
import "bootstrap/dist/js/bootstrap";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faClock, faFacebook, faCoffee} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faClock, faFacebook, faCoffee)

Vue.component("font-awesome-icon", FontAwesomeIcon);


Vue.config.productionTip = false;

new Vue({
  render: h => h(App)

}).$mount("#app");
