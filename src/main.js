// import Vue from 'vue';
// import App from './App.vue';
// import { router } from '@/router';
// import store from './store';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import VeeValidate from 'vee-validate';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import {
//   faHome,
//   faUser,
//   faUserPlus,
//   faSignInAlt,
//   faSignOutAlt
// } from '@fortawesome/free-solid-svg-icons';
// library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt);
// Vue.config.productionTip = false;
// Vue.use(VeeValidate);
// Vue.component('font-awesome-icon', FontAwesomeIcon);
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app');

// import 'mdb-vue-ui-kit/css/mdb.min.css';
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from './plugins/font-awesome'

createApp(App)
  .use(router)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
