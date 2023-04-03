<template>
    <div class="test">
        <h2 class="tit">School</h2>
        <h3>school name:{{ name }}</h3>
        <h3>school address:{{ address }}</h3>
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
    }
}
</script>
<style scoped>
.test {
    background: rgb(203, 245, 224);
}
</style>
