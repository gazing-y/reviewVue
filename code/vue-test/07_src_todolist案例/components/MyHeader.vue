<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入您的任务名称..." @keyup.enter="add" v-model="title">
    </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
    name: 'MyHeader',
    data() {
        return {
            title: ''
        }
    },
    props: ['addTodo'],
    methods: {
        add(e) {
            //校验数据
            if (!this.title.trim) return alert("输入不能为空！")
            // 将用户的输入包装成为一个对象
            const todoObj = {
                id: nanoid(),
                title: this.title,
                done: false

            }
            // 调整App组件去添加一个todo对象
            this.addTodo(todoObj)
            // 清空输入
            this.title = ''
            // e.target.value = ''
        }
    },

}
</script>

<style>
.todo-header {
    padding: 10px;
    background: rgb(87, 223, 241);
}
</style>