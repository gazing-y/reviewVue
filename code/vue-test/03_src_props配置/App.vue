<template>
    <div>
        <!--  :age 动态绑定，运行引号里面的js表达式 -->
        <Student name="zhangsan" sex="man" :age="18"></Student>
        <!-- <Student sex="man" name="lisi" age="20"></Student> -->
    </div>
</template>

<script>
// 引入student组件
import Student from './components/Student'

export default {
    name: 'App',
    components: {
        Student
    }
}
</script>