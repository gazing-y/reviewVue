export const mixin = {
    methods: {
        showName() {
            console.log(this.name);
        }
    },
    mounted() {
        console.log("mounted")
    },
}
export const mixin2 = {
    data(){
        return{
            x:100,
            y:200
        }
    }
}
