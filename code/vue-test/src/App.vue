<template>
    <div class="app">
        <h2>{{ hello }}</h2>
        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
        <School :getSchoolName="getSchoolName"></School>
        <hr>
        <!-- -->
        <Student></Student>
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
            hello: "hello"
        }
    },
    methods: {
        getSchoolName(name) {
            console.log("hhhhh", name);
        }
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
