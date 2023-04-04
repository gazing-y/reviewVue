<template>
    <div class="school">
        <h2>School</h2>
        <h3>school name:{{ name }}</h3>
        <h3>school address:{{ address }}</h3>
        <button @click="sendSchoolName">sendSchoolName</button>
    </div>
</template>
<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "School",
    props: ['getSchoolName'],
    data() {
        return {
            name: 'shenzhendaxue',
            address: "shenzhen"
        }
    },
    methods: {
        sendSchoolName() {
            this.getSchoolName(this.name)
        }
    }
}
</script>
<style scoped>
.school {
    padding: 5px;
    background: rgb(203, 245, 224);
}
</style>
