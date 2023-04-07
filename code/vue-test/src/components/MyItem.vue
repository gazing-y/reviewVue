<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)">
            <span v-show="!todo.isEdit">{{ todo.title }}</span>
            <input type="text" v-show="todo.isEdit" :value="todo.title" @blur="handleBlur(todo, $event)" ref="inputTitle">
        </label>
        <div class="btn">
            <button v-show="!todo.isEdit" @click="handleEdit(todo)">编辑</button>
            <button @click="handleDelete(todo.id)">删除</button>
        </div>
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
        },
        // 编辑
        handleEdit(todo) {
            // eslint-disable-next-line no-prototype-builtins
            if (todo.hasOwnProperty('isEdit')) {
                todo.isEdit = true
            } else {
                this.$set(todo, 'isEdit', true)
            }
            this.$nextTick(function () {
                this.$refs.inputTitle.focus()
            })
        },
        // 失去焦点回调（真正执行修改逻辑）
        handleBlur(todo, e) {
            todo.isEdit = false
            if (!e.target.value) return alert("输入不能为空！")
            this.$bus.$emit('updateTodo', todo.id, e.target.value)
        }
    }

}
</script>

<style lang="less" scoped>
.btn {
    display: flex;

    button {
        margin: 0 2px;
    }
}
</style>
