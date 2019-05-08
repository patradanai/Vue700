import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// Add Socket.io
import VueSocketIO from "vue-socket.io";
// Add bootrap
import BootstrapVue from "bootstrap-vue";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-vue/dist/bootstrap-vue.css" ;

Vue.use(new VueSocketIO({
  connection:'http://localhost:3000'
}));

Vue.use(BootstrapVue)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
