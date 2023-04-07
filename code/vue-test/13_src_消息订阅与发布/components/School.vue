<template>
    <div class="school">
        <h2 class="tit">School</h2>
        <h3>school name:{{ name }}</h3>
        <h3>school address:{{ address }}</h3>
    </div>
</template>
<script>
import pubsub from 'pubsub-js'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "School",
    data() {
        return {
            name: 'shenzhendaxue',
            address: "shenzhen"
        }
    },
    mounted() {
        // console.log('school x:', this.$bus)
        // this.$bus.$on('hello', (data) => {
        //     console.log("school组件中：", data);
        // })

        // 订阅消息
        // 写成箭头函数 指向 vc
        this.pubId = pubsub.subscribe('hello', (msgName, data) => {
            console.log("发布了hello消息，hello消息的回调执行了", msgName, data);
        })
    },
    beforeDestroy() {
        // this.$bus.$off('hello')
        pubsub.unsubscribe(this.pubId)
    }
}
</script>
<style scoped>
.school {
    background: rgb(203, 245, 224);
}
</style>
