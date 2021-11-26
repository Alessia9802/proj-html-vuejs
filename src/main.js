import Vue from "vue";
import App from "./App.vue";
import "@fontsource/montserrat";
import "@fontsource/montserrat-alternates";
import "@fontsource/abhaya-libre";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
