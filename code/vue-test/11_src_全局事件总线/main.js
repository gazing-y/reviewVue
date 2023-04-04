// 引入vue
import Vue from "vue";
// 引入app
import App from './App.vue'

// 关闭生产提示
Vue.config.productionTip = false

// const Demo = Vue.extend({})
// Vue.prototype.x = new Demo()

new Vue({
    render:h=>h(App),
    beforeCreate(){
        Vue.prototype.$bus = this //安装全局事件总线
    }
}).$mount('#app')