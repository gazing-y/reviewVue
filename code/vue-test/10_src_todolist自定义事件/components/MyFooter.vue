<template>
    <div class="todo-footer" v-show="total">
        <div>
            <label>
                <!-- 输入类型的节点，里面有初始值、有交互，可用一个v-model -->
                <!-- <input type="checkbox" :checked="isAll" @change="checkAll"> -->
                <input type="checkbox" v-model="isAll">
            </label>
            <span>
                <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
            </span>
        </div>
        <button class="btn" @click="clearAll">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: 'MyFooter',
    props: ['todos'],
    computed: {
        total() {
            return this.todos.length
        },
        doneTotal() {
            // const x = this.todos.reduce((pre, current) => {
            //     console.log(pre, current);
            //     return pre + (current.done ? 1 : 0)
            // }, 0)
            return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
        },
        // isAll() {
        //     return this.doneTotal === this.total && this.total > 0
        // }
        isAll: {
            get() {
                return this.doneTotal === this.total && this.total > 0
            },
            set(value) {
                this.$emit('checkAllTodo', value)
                // this.checkAllTodo(value)
            }
        }
    },
    methods: {
        // checkAll(e) {
        //     // console.log(e.target.checked);
        //     this.checkAllTodo(e.target.checked)
        // }
        clearAll() {
            this.$emit('clearAllTodo')
            // this.clearAllTodo()
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