import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/global.less';
import DonMessage from './globalJs/message';
import Rem from './globalJs/rem';
import VueResource from 'vue-resource'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Rem);
Vue.prototype.$message = DonMessage;
Vue.use(VueResource);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");