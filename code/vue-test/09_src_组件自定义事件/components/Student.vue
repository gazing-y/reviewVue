<template>
    <div class="student">
        <h2 class="tit">Student111</h2>
        <h3>student name:{{ name }}</h3>
        <h3>student age:{{ age }}</h3>
        <p>{{ n }}</p>
        <button @click="add">n++</button>
        <button @click="sentStudentName">sentStudentName</button>
        <button @click="unbind">解绑onmyself事件</button>
        <button @click="death">销毁当前student组件实例对象（vc）</button>
    </div>
</template>
<script>

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Student",
    data() {
        return {
            name: 'zhangsan',
            age: 20,
            n: 0
        }
    },
    methods: {
        add() {
            console.log("add");
            this.n++
        },
        sentStudentName() {
            // console.log(this.name);
            // 触发Student组件实例身上的onmyself事件
            this.$emit('onmyself', this.name, 111, 222, 333)
            // this.$emit('demo')
            // this.$emit('click')
        },
        unbind() {
            // 解绑一个自定义事件
            this.$off('onmyself')

            // 解绑多个自定义事件
            // this.$off(['onmyself', 'demo'])

            // 解绑所有的自定义事件
            // this.$off()
        },
        death() {
            // 销毁了当前Student组件的实例,销毁后所有Student实例的自定义事件全都不奏效
            this.$destroy()
        }
    }
}
</script>
<style scoped>
.student {
    padding: 5px;
    background: rgb(214, 217, 243);
}
</style>
