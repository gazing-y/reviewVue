<template>
    <div class="school">
        <h2 class="tit">School</h2>
        <h3>school name:{{ name }}</h3>
        <h3>school address:{{ address }}</h3>
    </div>
</template>
<script>
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
        console.log('school x:', this.$bus)
        this.$bus.$on('hello', (data) => {
            console.log("school组件中：", data);
        })
    },
    beforeDestroy() {
        this.$bus.$off('hello')
    }
}
</script>
<style scoped>
.school {
    background: rgb(203, 245, 224);
}
</style>
