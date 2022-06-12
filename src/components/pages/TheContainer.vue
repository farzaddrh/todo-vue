<template>

    <div class="container" :class="darkMode">
        <the-header></the-header>

        <base-cart>
            <todo-list :todos="dos"></todo-list>

             <div class="filter-todos">
                <p class="itemsRemained">{{itemsRemained}} items left</p>

                <div class="filter">
                        <base-btn :mode="filterTodo === 'all' ? 'active' : ''"
                         @click="showFilteredTodos('all')">All</base-btn>

                        <base-btn :mode="filterTodo === 'active' ? 'active' : ''" @click="showFilteredTodos('active')">Active</base-btn>

                        <base-btn :mode="filterTodo === 'completed' ? 'active' : ''"  @click="showFilteredTodos('completed')">Completed</base-btn>
                </div>

                <base-btn :mode="filterTodo === 'clear' ?'active' : ''"
                @click="showFilteredTodos('clear')">Clear Completed</base-btn>

              </div>
        </base-cart>

        <base-cart>
                <div class="filter mobile-filter">
                    <base-btn :mode="filterTodo === 'all' ? 'active' : ''"
                    @click="showFilteredTodos('all')">All</base-btn>

                    <base-btn :mode="filterTodo === 'active' ? 'active' : ''"
                    @click="showFilteredTodos('active')">Active</base-btn>

                    <base-btn :mode="filterTodo === 'completed' ?'active' : ''"
                     @click="showFilteredTodos('completed')">Completed</base-btn>
                </div>
        </base-cart>
    </div>
</template>

<script>

import TheHeader from "@/components/layout/TheHeader.vue";
import TodoList from '@/components/TodoList.vue'
import BaseCart from '@/components/UI/BaseCart.vue';
export default {
    data(){
         return{filterTodo:'all'}
     },

    components: {
        TheHeader,
        TodoList,
        BaseCart,
    },

    methods: {
       showFilteredTodos(btn){
           this.filterTodo=btn
           if (btn==='clear') this.$store.dispatch('tDos/clearCompletedTodos')
       },
    },

    computed: {
        todos() {
            return this.$store.getters['tDos/todos']
        },

        dos(){
            if(this.filterTodo === "active") return this.todos.filter(t=>t.done===false)
            if(this.filterTodo ===' completed') return this.todos.filter(t=>t.done===true)

            return  this.todos
        },

        itemsRemained(){
            return this.$store.getters['tDos/todos'].filter(t=>t.done === false).length
        },

        darkMode(){
            return {dark:this.$store.getters.isDark}
        }
    }

};
</script>

<style lang="scss">
    .container {
        min-height: 100vh;
        position: relative;
        background-color: white;
        background: url("@/assets/images/bg-desktop-light.jpg");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: left top;
        padding-top: 8rem;

        .filter-todos {
            padding: 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .itemsRemained {
                color: #b3b4c0;
                font-size: 1.5rem;
                font-weight: 400;
                }

            .filter{
                display: flex;
                gap: 2rem;
                }
        }

        .mobile-filter{
            margin-top: 2rem;
            padding: 2rem;
            justify-content: center;
            display: none;
        }

    }
/* ///////////////dark mode//////////// */
    .container.dark{
        background: url("@/assets/images/bg-desktop-dark.jpg");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: left top;
        background-color: hsl(235, 21%, 11%);

        .itemsRemained{
             color: #4d5066
            }
    }
/* ////////////////responsive///////////////////// */
    @media (max-width: 768px) {
        .container{
            background: url("@/assets/images/bg-mobile-light.jpg");
            background-repeat: no-repeat;
            background-size: contain;
            background-position: left top;
            padding-inline: 2rem;

            .filter{
                display: none;
            }

            .mobile-filter{ display: flex;
            }
        }

        /* dark mode */
    .container.dark{
            background: url("@/assets/images/bg-mobile-dark.jpg");
            background-repeat: no-repeat;
            background-size: contain;
            background-position: left top;
            background-color: hsl(235, 21%, 11%);
        }
    }
</style>
