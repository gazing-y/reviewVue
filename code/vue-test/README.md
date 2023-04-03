# vue_test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
### 笔记
### 脚手架文件结构
|——node_modules
|——public
|  |——favicon.icn ：页签图标
|  |__index.html：主页面
|——src
|  |——assets：存放静态资源
|  |  |__logo.png
|  |——component：存放组件
|  |  |__HelloWorld.vue
|  |——App.vue：汇总所有组件
|  |——main.js：入口文件
|——.gitignore：git版本管制忽略的配置
|——babel.config.js：babel的配置文件
|——package.json：应用包配置文件
|——TEADME.md：应用描述文件
|——package-lock.json:包版本控制文件


### 关于不同版本的vue
  关于不同版本的vue：
    1.vue.js与vue.runtime.xxx.js的区别
    （1）vue.js是完整版的vue，包含：核心功能+模板解析器
    （2）vue.runtime.xxx.js 是运行版的vue，只包含：核心功能，没有模板解析器

    2.因为vue.runtime.xxx.js 没有模板解析器，所以不能使用template配置项，需要使用render函数接收到的createElement函数去指定具体的内容


### vue.config.js 配置文件
> 使用vue inspect > output.js可以查看到vue脚手架的默认配置。
> 使用vue.config.js 可以对脚手架进行个性化定制

### ref属性
  1.被用来给元素或子组件注册引用信息（id的替代者）
  2.应用在html标签上获取的是真实dom元素，应用在组件标签上是组件的实例对象（vc）
  3.使用方式：
    打标识：<h1 ref="xxx">xxxx</h1>  或者  <School ref="xxxx"></School>
    获取：this.$ref.xxx

### 配置项props
  功能：让组件接收外部传过来的数据
  （1）传递数据
      <Demo name="xxx"></Demo>
  （2）接收数据
      * 第一种方式（只接收）
      props:['name']

      * 第二种方式（限制类型）
      props：{
        name:Number
      }

      * 第三种方式（限制类型、限制必要性、指定默认值）
      props：{
        name：{
          type：String,//类型
          retuired:true,//必要性
          default:'zhangsan'//默认值
        }
      }
  备注：props是只读的，vue底层会监测你对props的修改，若进行了修改，就会发出警告。
        若业务需求确实要修改，可复制props的内容到data中一份，然后修改data中的数据

### minin 混入
  功能：可以把多个组件共用的配置提取成一个混入对象
  使用方式：
      1.第一步定义混合，例如：
        {
          data(){......},
          methods:{......}
          ......
        }
      
      第二步使用混入，例如：
       （1）全局混入：Vue.mixin(xxx)
       （2）局部混入：mixins:['xxx']

### 插件
    功能：用于增强vue
    本质：包含install方法的一个对象，install的第一个参数是vue，第二个以后的参数是插件使用者传递的数据
    定义插件：
      对象.install = function(Vue，options){
        //1.添加全局过滤器
        Vue.filter（...）

        //2.添加全局指令
        Vue.directive(...)

        //3.配置全局混入
        Vue.mixin(...)
        
        //4.添加实例方法
        Vue.prototype.$myMethod = function(){...}
        Vue.prototype.$myProperty = xxx
      }
    使用插件：Vue.use()

### scoped 样式
    作用：让样式在局部生效，防止冲突
    写法：<style scoped></style>