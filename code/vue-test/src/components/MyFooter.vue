<template>
    <div class="todo-footer">
        <div>
            <label>
                <input type="checkbox">
            </label>
            <span>
                <span>已完成{{ doneTotal }}</span> / 全部{{ todos.length }}
            </span>
        </div>
        <button class="btn">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: 'MyFooter',
    props: ['todos'],
    computed: {
        doneTotal() {
            // const x = this.todos.reduce((pre, current) => {
            //     console.log(pre, current);
            //     return pre + (current.done ? 1 : 0)
            // }, 0)
            return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
        }
    }
}
</script>

<style>
.todo-footer {
    padding: 10px;
    background: rgb(87, 223, 241);
    display: flex;
    justify-content: space-between;
}
</style>