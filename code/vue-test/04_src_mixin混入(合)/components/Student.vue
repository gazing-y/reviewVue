<template>
    <div>
        <h3 @click="showName">student name:{{ name }}</h3>
        <h3>student age:{{ age }}</h3>
    </div>
</template>
<script>
// 局部混合
// import { mixin, mixin2 } from '../mixin'
export default {
    name: "Student",
    data() {
        return {
            name: 'zhangsan',
            age: 20,
            x: 1 //优先级比mixin高
        }
    },
    // 钩子函数 和 混合的钩子函数都有效（混合的在前）
    mounted() {
        console.log("student mounted!!!!!")
    },
    // mixins: [mixin, mixin2]
}
</script>
