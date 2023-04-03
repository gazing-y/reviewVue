// 引入vue
import Vue from "vue";
// 引入app
import App from './App.vue'
// 全局混合mixin
import { mixin,mixin2 } from "./mixin";
// 关闭生产提示
Vue.config.productionTip = false

Vue.mixin(mixin)
Vue.mixin(mixin2)
new Vue({
    render:h=>h(App)
}).$mount('#app')