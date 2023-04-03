<template>
    <div>
        <h2 ref="title" id="title">{{ msg }}</h2>
        <button @click="showMsg">showMsg</button>

        <Student ref="stu"></Student>
    </div>
</template>

<script>
// 引入student组件
import Student from './components/Student'

export default {
    name: 'App',
    data() {
        return {
            msg: 'hahahhh'
        }
    },
    methods: {
        showMsg() {
            console.log(document.getElementById('title'))
            // ref ===>  id替代者
            console.log(this.$refs.title)//真实dom元素
            console.log(this.$refs.stu)//Student组件实例对象(vc) 
            console.log(this.msg)
        }
    },
    components: {
        Student
    }
}
</script>