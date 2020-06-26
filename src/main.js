import Vue from "vue";
import Home from "../src/pages/Home.vue";
// import jquery from "jquery";
import "popper.js";
// import Bootstrap from "bootstrap";
import "bootstrap/dist/js/bootstrap";
import router from "./router";
import VueRouter from "vue-router";

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

import Home from "./pages/Home.vue";
import Home from "./pages/About.vue";
import Home from "./pages/Blog.vue";
import Home from "./pages/Services.vue";
import Home from "./pages/Contact.vue";

Vue.use(VueRouter);
const routes = [
  { path: "/home", component: Home },
  { path: "/about", component: About },
  { path: "/blog", component: Blog },
  { path: "/services", component: Services },
  { path: "/contact", component: Contact }  
];

const routes = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
}).$mount("#app");