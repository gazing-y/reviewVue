<template>
    <div class="student">
        <h2 class="tit">Student111</h2>
        <h3>student name:{{ name }}</h3>
        <h3>student age:{{ age }}</h3>
        <button></button>
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
.student {
    background: rgb(214, 217, 243);
}
</style>
