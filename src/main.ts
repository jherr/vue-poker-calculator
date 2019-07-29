import Vue from 'vue';
import App from './App.vue';
import store from './store';
import vuetify from './plugins/vuetify';
import Vuex from 'vuex';

Vue.use(Vuex);

Vue.config.productionTip = false;

Vue.filter('percent', (v: number) => `${Math.round(v)}%`);

new Vue({
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
