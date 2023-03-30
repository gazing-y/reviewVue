<!-- 组件的结构 -->
<template>
    <div class="demo">
        <h3>学生名称：{{ name }}</h3>
        <h3>学生年龄：{{ age }}</h3>
        <button @click="showName">tips</button>
    </div>
</template>

<script>
// 交互相关的代码（数据、方法等）
export default {
    name: 'Student',
    data() {
        return {
            name: "张三",
            age: "18"
        }
    },
    methods: {
        showName() {
            console.log(this.name);
        }
    },
}
</script>
<style>
/* 组件的样式 */
.demo h3 {
    color: blueviolet;
}
</style>