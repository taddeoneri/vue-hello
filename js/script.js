const {createApp} = Vue;

createApp({
    data(){
        return{
            title: 'Hello Vue!',
            image: 'https://www.zoo-service.it/wp-content/uploads/2019/01/carattere-dei-cani.jpg.webp',
            color: 'red'
        }
    },
    methods:{
        changeColor(){
            this.color = 'green';
        }
    } 
}).mount('#app');