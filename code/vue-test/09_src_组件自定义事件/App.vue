<template>
    <div class="app">
        <h2>{{ hello }}</h2>
        <h2>student name:{{ studentName }}</h2>
        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
        <School :getSchoolName="getSchoolName"></School>
        <hr>
        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第一种写法：使用@或v-on)-->
        <!-- <Student v-on:onmyself="getStudentName"></Student> -->
        <!-- <Student @onmyself="getStudentName" @demo="m1"></Student> -->

        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第一种写法：使用ref)-->
        <Student ref="student" @click.native="show"></Student>
    </div>
</template>

<script>
// 引入组件
import School from './components/School'
import Student from './components/Student'

export default {
    name: 'App',
    components: {
        Student,
        School
    },
    data() {
        return {
            hello: "hello",
            studentName: ''
        }
    },
    methods: {
        getSchoolName(name) {
            console.log("getSchoolName:", name);
        },
        getStudentName(name, ...params) {
            this.studentName = name
            console.log("getStudentName:", name, params);
        },
        m1() {
            console.log("demo!!!");
        },
        show() {
            console.log("11111111")
        }
    },
    mounted() {
        this.$refs.student.$on('onmyself', this.getStudentName)
        // 写成箭头函数，指向vm
        // 写成普通函数，指向Student的实例对象vc
        // this.$refs.student.$on('onmyself', (name, ...params) => {
        //     console.log("getStudentName:", name, params);
        //     console.log(this);
        //     this.getStudentName = name
        // })

        // 只执行一次
        // this.$refs.student.$once('onmyself', this.getStudentName)
    }
}
</script>
<!-- lang 默认为css -->
<style scoped lang="less">
.app {
    padding: 5px;
    background-color: rgb(190, 238, 245);
}
</style>
