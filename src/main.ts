import Vue from 'vue';
import Vuex from 'vuex';
import VueI18n from 'vue-i18n';

import App from './App.vue';
import store from './store';
import vuetify from './plugins/vuetify';
import messages from './messages';

Vue.use(VueI18n);
Vue.use(Vuex);

Vue.config.productionTip = false;

Vue.filter('percent', (v: number) => `${Math.round(v)}%`);

const i18n = new VueI18n({
  locale: 'en',
  messages,
});

new Vue({
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
