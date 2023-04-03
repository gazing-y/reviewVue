<template>
    <div class="test">
        <h2 class="tit">Student</h2>
        <h3>student name:{{ name }}</h3>
        <h3>student age:{{ age }}</h3>
    </div>
</template>
<script>

export default {
    name: "Student",
    data() {
        return {
            name: 'zhangsan',
            age: 20,
        }
    },
}
</script>
<style scoped>
.test {
    background: rgb(214, 217, 243);
}
</style>
