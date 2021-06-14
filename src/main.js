import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

import store from "./store";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'

Vue.use(VueSweetalert2);

import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyD9ZGUUNnv4Gq378W-lnlcUO3_ivCv94IU",
  authDomain: "otto-klaus-inventario.firebaseapp.com",
  databaseURL: "https://otto-klaus-inventario.firebaseio.com",
  projectId: "otto-klaus-inventario",
  storageBucket: "otto-klaus-inventario.appspot.com",
  messagingSenderId: "1082896929748",
  appId: "1:1082896929748:web:56efc15b4c6ee1620dfc41"
};
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
