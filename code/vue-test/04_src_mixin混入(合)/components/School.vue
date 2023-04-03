<template>
    <div>
        <h3 @click="showName">school name:{{ name }}</h3>
        <h3>school address:{{ address }}</h3>
    </div>
</template>
<script>
// 局部混合
// import { mixin } from '../mixin'
export default {
    name: "School",
    data() {
        return {
            name: 'shenzhendaxue',
            address: "shenzhen"
        }
    },
    // mixins: [mixin]
}

</script>
