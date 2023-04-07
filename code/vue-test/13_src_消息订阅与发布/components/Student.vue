<template>
    <div class="student">
        <h2 class="tit">Student</h2>
        <h3>student name:{{ name }}</h3>
        <h3>student age:{{ age }}</h3>
        <button @click="sendStudentName">把学生名给school组件</button>
    </div>
</template>
<script>
import pubsub from 'pubsub-js'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Student",
    data() {
        return {
            name: 'zhangsan',
            age: 20,
        }
    },
    mounted() {
        // console.log('student x:', this.$bus)
    },
    methods: {
        sendStudentName() {
            // this.$bus.$emit('hello', this.name)
            pubsub.publish('hello', 666)
        }
    }
}
</script>
<style scoped>
.student {
    background: rgb(214, 217, 243);
}
</style>
