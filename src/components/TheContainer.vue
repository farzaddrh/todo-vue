<template>
    <div class="container">
        <the-header></the-header>
        <base-cart>
            <todo-list :todos="clickedBtn?dos:todos"></todo-list>
            <div class="filter-todos">
                <p>3 items remain</p>
                <base-btn @click="filterTodos('all')">All</base-btn>
                <base-btn @click="filterTodos('active')">Active</base-btn>
                <base-btn @click="filterTodos('completed')">Completed</base-btn>
                <base-btn>Clear Completed</base-btn>

            </div>
        </base-cart>
    </div>
</template>
<script>

import TheHeader from "./layout/TheHeader.vue";
import TodoList from './TodoList.vue'


export default {
    data(){
    return{clickedBtn:null,dos:[]}
     },

    components: {
        TheHeader,
        TodoList,
    },
    methods: {

       filterTodos(btn){
           console.log('check');
           this.clickedBtn=btn
           if(btn==='active') {this.dos=this.$store.getters['tDos/activeTodos']}
           if(btn==='all'){this.dos= this.dos=this.$store.getters['tDos/todos']}
           if(btn==='completed'){this.dos=this.todos.filter(t=>t.done===true)}
           console.log(this.dos);
       }


    },
    computed: {
        todos() {
            return this.$store.getters['tDos/todos']
        }
        ,

    },
    // watch:{
    //     clickedBtn(value){
    //         console.log(value);
    //         if(value==='active'){this.dos=this.$store.getters['tDos/activeTodos']}else if(value==='completed'){
    //             this.dos=this.todos.filter(t=>t.done===true)
    //         }else if (value==='all'){
    //             this.dos=this.$store.getters['tDos/todos']
    //         console.log(this.dos);
    //         }
    //     }
    // }
};
</script>
<style>
.container {
    min-height: 100vh;
    position: relative;
    background-color: white;
    background: url("./../assets/images/bg-desktop-light.jpg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: left top;
    padding-top: 8rem;
}

.filter-todos {
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
