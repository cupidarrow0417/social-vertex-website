import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/ant-design-vue'
import './plugins/lottie'
import './plugins/markdown'
import nprogress from './plugins/nprogress'
import './plugins/axios'
import Icon from './components/Icon'

let requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('./assets/icons', false, /\.svg$/);
requireAll(req);
Vue.use(Icon);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  nprogress,
  render: h => h(App)
}).$mount('#app');