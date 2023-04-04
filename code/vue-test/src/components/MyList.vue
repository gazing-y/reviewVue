<template>
    <ul>
        <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" />
    </ul>
</template>

<script>
import MyItem from './MyItem.vue'
export default {
    name: 'MyList',
    components: {
        MyItem
    },
    props: ['todos']

}
</script>

<style lang="less">
ul {
    margin: 0;
    padding: 10px;
    background: rgb(161, 243, 174);

    li {
        padding: 10px;
        list-style: none;
        display: flex;
        justify-content: space-between;

        .btn {
            display: none;
        }

        &:hover {
            background: rgb(197, 243, 205);

            .btn {
                display: block;
            }
        }
    }


}
</style>