<template>
    <div>
        <h2>{{ msg }}</h2>
        <h3>student name:{{ name }}</h3>
        <h3>student sex:{{ sex }}</h3>
        <h3>student age:{{ myAge + 1 }}</h3>
        <button @click="changeAge">修改传入的年龄</button>
    </div>
</template>
<script>
export default {
    name: "Student",
    data() {
        return {
            msg: "hahhh",
            myAge: this.age
        }
    },
    methods: {
        changeAge() {
            this.myAge++
        }
    },
    // 简单声明接收
    props: ['name', 'sex', 'age']

    // 接收的同时对数据进行类型限制
    /* props: {
         name: String,
         age: Number,
         sex: String
     }
     */

    //接收的同时对数据：进行类型限制 + 默认值的指定 + 必要性的限制
    // required 和 default一般不一起用
    /** 
    props: {
        name: {
            type: String,//限制类型是string
            required: true//限制必传
        },
        age: {
            type: Number,
            default: 99 //默认值
        },
        sex: {
            type: String,
            required: true
        }
    }
    */

}

</script>
