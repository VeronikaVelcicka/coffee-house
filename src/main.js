import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
import MenuItem from "./components/MenuItem.vue";
import Top from "./components/Top.vue";
import Cart from "./components/Cart.vue";

Vue.config.productionTip = false

Vue.use({store});
Vue.component('Top', Top);
Vue.component('MenuItem', MenuItem);
Vue.component('Cart', Cart);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
