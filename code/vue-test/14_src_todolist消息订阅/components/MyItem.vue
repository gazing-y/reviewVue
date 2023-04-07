<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)">
            <span>{{ todo.title }}</span>
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    </li>
</template>

<script>
import pubsub from 'pubsub-js';
export default {
    name: 'MyItem',
    props: ['todo'],
    methods: {
        // 勾选 or 取消勾选
        handleCheck(id) {
            // 通知App组件将对应的done 取反
            // this.checkTodo(id)
            this.$bus.$emit('checkTodo', id)

        },
        // 删除
        handleDelete(id) {
            if (confirm("确定删除吗？")) {
                // this.deleteTodo(id) 

                // 全局事件总线
                // this.$bus.$emit('deleteTodo', id) 

                // 消息订阅
                pubsub.publish('deleteTodo', id)
            }
        }
    }

}
</script>

<style></style>