<template>
    <div>
        <h3>student name:{{ name | mySlice }}</h3>
        <h3>student age:{{ age }}</h3>
        <input type="text" v-fbind:value="name">
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
