// 引入vue
import Vue from "vue";
// 引入app
import App from './App.vue'

// 关闭生产提示
Vue.config.productionTip = false

new Vue({
    render:h=>h(App)
}).$mount('#app')