<template>
  <div>
    <h3>student name：{{ name }}</h3>
    <h3>student age:{{ age }}</h3>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Student',
  data() {
    return {
      name: "zhangsan",
      age: 20
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  color: blue;
}
</style>
