<template>
    <div>
        <h3>student name:{{ name }}</h3>
        <h3>student age:{{ age }}</h3>
    </div>
</template>
<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Student",
    data() {
        return {
            name: "zhangsanfeng",
            age: 22
        }
    }
}

</script>
<style>
h3 {
    border: 1px solid #333;
}
</style>