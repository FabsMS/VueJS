const MyNameApp = {
    data(){
        return{
            name: "Fabricio",
            age: 21
        }
    }
}

Vue.createApp(MyNameApp).mount("#app")