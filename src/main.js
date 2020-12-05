import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueSignaturePad from './plugins/vue-signature-pad'

Vue.config.productionTip = false

new Vue({
  vuetify,
  VueSignaturePad,
  render: h => h(App)
}).$mount('#app')
