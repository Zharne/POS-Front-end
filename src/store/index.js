// import Vue from 'vue';
// import Vuex from 'vuex';
// import { auth } from '../store/Auth.module';
// Vue.use(Vuex);
// export default new Vuex.Store({
//   modules: {
//     auth
//   }
// });

import { createStore } from "vuex";
import { auth } from "./Auth.module";
const store = createStore({
  modules: {
    auth,
  },
});
export default store;
