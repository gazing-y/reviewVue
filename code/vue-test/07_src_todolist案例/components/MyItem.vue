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

export default {
    name: 'MyItem',
    props: ['todo', 'checkTodo', 'deleteTodo'],
    methods: {
        // 勾选 or 取消勾选
        handleCheck(id) {
            // 通知App组件将对应的done 取反
            this.checkTodo(id)

        },
        // 删除
        handleDelete(id) {
            if (confirm("确定删除吗？")) {
                this.deleteTodo(id)
            }
        }
    }

}
</script>

<style></style>