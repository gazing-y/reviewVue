<template>
    <div>
        <h3>school name:{{ name }}</h3>
        <h3>school address:{{ address }}</h3>
        <button @click="testHello">测试hello方法</button>
    </div>
</template>
<script>
export default {
    name: "School",
    data() {
        return {
            name: 'shenzhendaxue',
            address: "shenzhen"
        }
    },
    methods: {
        testHello() {
            this.hello()
        }
    }
}

</script>
