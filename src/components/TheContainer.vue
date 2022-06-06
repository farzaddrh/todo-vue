<template>
    <div class="container" :class="darkMode">
        <the-header></the-header>
        <base-cart>
            <todo-list :todos="dos"></todo-list>
            <div class="filter-todos">
                <p class="itemsRemained">{{itemsRemained}} items left</p>
                <div class="filter">
                <base-btn :mode="filterTodo==='all'?'active':''" @click="showFilteredTodos('all')">All</base-btn>
                <base-btn :mode="filterTodo==='active'?'active':''" @click="showFilteredTodos('active')">Active</base-btn>
                <base-btn :mode="filterTodo==='completed'?'active':''"  @click="showFilteredTodos('completed')">Completed</base-btn>
                </div>
                <base-btn :mode="filterTodo==='clear'?'active':''" @click="showFilteredTodos('clear')">Clear Completed</base-btn>

            </div>
        </base-cart>
    </div>
</template>
<script>

import TheHeader from "./layout/TheHeader.vue";
import TodoList from './TodoList.vue'


export default {
    data(){
    return{filterTodo:'all'}
     },

    components: {
        TheHeader,
        TodoList,
    },

    methods: {
       showFilteredTodos(btn){
           this.filterTodo=btn
       }
    },

    computed: {
        todos() {
            return this.$store.getters['tDos/todos']
        },

        dos(){
            if(this.filterTodo==="active") return this.todos.filter(t=>t.done===false)
            if(this.filterTodo==='completed') return this.todos.filter(t=>t.done===true)
            if(this.filterTodo==='clear') return this.$store.getters['tDos/activeTodos']

            return  this.todos
        },
        itemsRemained(){
            return this.$store.getters['tDos/todos'].filter(t=>t.done===false).length
        },
        darkMode(){

            return {dark:this.$store.getters.isDark}
        }
    }

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

.itemsRemained{
     color: #b3b4c0;
     font-size: 1.5rem;
     font-weight: 400;
}
.filter{
    display: flex;
    gap: 2rem;

}
/* ///////////////dark mode//////////// */
.container.dark{
    background: url("./../assets/images/bg-desktop-dark.jpg");
   background-repeat: no-repeat;
    background-size: contain;
    background-position: left top;
    background-color: hsl(235, 21%, 11%);
}
.container.dark .itemsRemained{
      color: #4d5066
}
</style>
