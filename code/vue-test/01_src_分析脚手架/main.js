/*
  该文件是整个项目的入口文件
*/ 

// 引入vue
import Vue from 'vue'
// 引入APP组件，它是所有组件的父组件
import App from './App.vue'

// 关闭vue的生产提示
Vue.config.productionTip = false

/*
  关于不同版本的vue：
    1.vue.js与vue.runtime.xxx.js的区别
    （1）vue.js是完整版的vue，包含：核心功能+模板解析器
    （2）vue.runtime.xxx.js 是运行版的vue，只包含：核心功能，没有模板解析器

    2.因为vue.runtime.xxx.js 没有模板解析器，所以不能使用template配置项，需要使用render函数接收到的createElement函数去指定具体的内容

*/

// 创建vue的实例对象vm
new Vue({
  el:'#app',
  render: h => h(App),
  // render(){
  //   console.log('render');
  //   return null
  // }
})
// .$mount('#app')
