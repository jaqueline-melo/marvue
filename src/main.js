import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueApexCharts from 'vue-apexcharts/dist/vue-apexcharts'
import VueTheMask from 'vue-the-mask'
import VueMoment from 'vue-moment'

Vue.use(VueTheMask)
Vue.use(VueMoment);

Vue.component('apexchart', VueApexCharts)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: el => el(App)
}).$mount('#app')
