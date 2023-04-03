<template>
    <div>
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
            name: "shenzhen university",
            address: "shenzhen"
        }
    }
}
</script>
<style>
h3 {
    color: blueviolet;
}
</style>