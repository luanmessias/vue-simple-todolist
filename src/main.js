import Vue from "vue";
import App from "./App.vue";
import "@/assets/styles/reset.css";
import "@/assets/styles/main.css";
import "./registerServiceWorker";
import VueEllipseProgress from "vue-ellipse-progress";

Vue.config.productionTip = false;
Vue.use(VueEllipseProgress);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
