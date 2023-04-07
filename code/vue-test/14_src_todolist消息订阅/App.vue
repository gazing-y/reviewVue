<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <!-- <MyHeader></MyHeader> -->
            <MyHeader @addTodo="addTodo" />
            <MyList :todos="todosLists" />
            <MyFooter :todos="todosLists" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo" />
        </div>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import MyList from './components/MyList'

export default {
    name: 'App',
    data() {
        return {
            todosLists: JSON.parse(localStorage.getItem('todos')) || []
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
        deleteTodo(_, id) {
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
    watch: {
        todosLists: {
            // 深度监视
            deep: true,
            handler(value) {
                localStorage.setItem('todos', JSON.stringify(value))
            }
        }
    },
    components: {
        MyHeader,
        MyFooter,
        MyList
    },
    mounted() {
        this.$bus.$on('checkTodo', this.checkTodo)
        this.pubId = pubsub.subscribe('deleteTodo', this.deleteTodo)
    },
    beforeDestroy() {
        this.$bus.$off('checkTodo')
        pubsub.unsubscribe(this.pubId)
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
