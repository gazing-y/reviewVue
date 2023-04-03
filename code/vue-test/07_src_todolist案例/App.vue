<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <!-- <MyHeader></MyHeader> -->
            <MyHeader :addTodo="addTodo" />
            <MyList :todos="todosLists" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
            <MyFooter :todos="todosLists" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo" />
        </div>
    </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import MyList from './components/MyList'
import { toUnicode } from 'punycode'

export default {
    name: 'App',
    data() {
        return {
            todosLists: [
                { id: '01', title: "hahaha", done: true },
                { id: '02', title: "heihei", done: false },
                { id: '03', title: "wuwuwu", done: true },
            ]
        }
    },
    methods: {
        // 添加一个todo
        addTodo(todoObj) {
            this.todosLists.unshift(todoObj)
        },
        // 勾选 or 取消勾选todo
        checkTodo(id) {
            this.todosLists.forEach((todo) => {
                if (todo.id === id) {
                    todo.done = !todo.done
                }
            })
        },
        // 删除
        deleteTodo(id) {
            this.todosLists = this.todosLists.filter((todo) => {
                return todo.id !== id
            })
        },
        // 全选 or 全不选
        checkAllTodo(done) {
            this.todosLists.forEach((todo) => {
                todo.done = done
            })
        },
        // 清除已完成任务
        clearAllTodo() {
            this.todosLists = this.todosLists.filter((todo) => {
                return !todo.done
            })
        }
    },
    components: {
        MyHeader,
        MyFooter,
        MyList
    }
}
</script>

<style scoped lang="less">
.todo-container {
    width: 500px;
    padding: 10px;
    display: inline-block;
    border: 2px solid rgb(119, 141, 238);
}
</style>
