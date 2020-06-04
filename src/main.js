import Vue from "vue";
import App from "./App.vue";
// import jquery from "jquery";
import "popper.js";
// import Bootstrap from "bootstrap";
import "bootstrap/dist/js/bootstrap";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
