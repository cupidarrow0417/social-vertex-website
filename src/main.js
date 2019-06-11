import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './plugins/ant-design-vue.js'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
