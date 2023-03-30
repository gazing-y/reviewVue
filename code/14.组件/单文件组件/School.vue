<!-- 组件的结构 -->
<template>
    <div>
        <h3>学校名称：{{ name }}</h3>
        <h3>学校地址：{{ address }}</h3>
        <button @click="showName">tips</button>
    </div>
</template>

<script>
// 交互相关的代码（数据、方法等）
export default {
    name: 'School',
    data() {
        return {
            name: "深圳大学",
            address: "深圳"
        }
    },
    methods: {
        showName() {
            console.log(this.name);
        }
    },
}
</script>