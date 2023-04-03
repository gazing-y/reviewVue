<template>
    <div>
        <h2 class="tit">App</h2>
        <School></School>
        <hr>
        <Student></Student>
        <div class="demo">
            <p>hahah</p>
            <i>hahah</i>
        </div>
    </div>
</template>

<script>
// 引入组件
import School from './components/School'
import Student from './components/Student'

export default {
    name: 'App',
    components: {
        Student,
        School
    }
}
</script>
<!-- lang 默认为css -->
<style scoped lang="less">
.tit {
    color: red;
}

.demo {
    p {
        color: rgb(160, 190, 27);
    }
}
</style>
