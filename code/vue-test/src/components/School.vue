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
    background: rgb(203, 245, 224);
}
</style>
