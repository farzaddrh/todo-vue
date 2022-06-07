<template>
    <header>
        <div class="title">
            <p class="title__heading">todo</p>

            <div class="title__moon" @click="showDarkMode" > </div>
        </div>

        <div class="add-todo">
            <div class="add-todo__icon-input"></div>

            <input @keydown.enter="addTodo" type="text" name="todo" id="todo" placeholder="Create a new to do..."  v-model="todo">
        </div>
    </header>
</template>

<script>
import uniqid from "uniqid";

export default {
    data() {
        return { todo: '' }
    },

    methods: {
        addTodo() {
            if (!this.todo) return
            const newTodo = { todo: this.todo, id: uniqid(), done: false }
            this.$store.dispatch('tDos/addTodo', newTodo)
            this.todo = ''
        },

        showDarkMode(){
            this.$store.dispatch('showDarkMode')
        }
    }
}
</script>

<style scoped lang="scss">
    header {
        width: 50rem;
        margin: 0 auto;

        .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 3rem;

            .title__moon {
            cursor: pointer;
            height: 26px;
            width: 26px;
            background: url(./../../assets/images/icon-moon.svg);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
           }
            .title__heading {
            text-transform: uppercase;
            letter-spacing: 1.1rem;
            font-weight: 700;
            color: white;
            font-size: 3.2rem;
           }
      }

      .add-todo {
        position: relative;
        margin-bottom: 2.5rem;

        .add-todo__icon-input {
            position: absolute;
            height: 25px;
            width: 25px;
            border-radius: 50%;
            top: 50%;
            left: 2rem;
            transform: translateY(-50%);
            padding: 1rem;
            border: 2px solid hsl(233, 11%, 84%);
             }

       #todo {

            width: 100%;
            border-radius: 4px;
            padding-inline: 6.5rem;
            padding-block: 2rem;
            border: 1px solid transparent;
            font-family: "Josefin Sans";

                &::-webkit-input-placeholder {
                    font-family: "Josefin Sans";
                    color: hsl(236, 9%, 61%);
                    }

             }
       }

    }

/* /////////////////////Dark mode/////////////////////////*/
    .container.dark{
        .title__moon{
             background: url(./../../assets/images/icon-sun.svg);
            }

        .add-todo{
            #todo {
                background-color: hsl(235, 24%, 19%);
                color: #8f909a;

                &::-webkit-input-placeholder {
                        color: #8f909a;
                        }
                    }

            .add-todo__icon-input{
                 border: 1px solid hsl(233, 14%, 35%);
                     }

             }
    }

/* /////////////////////////responsive////////////////// */
    @media (max-width: 768px) {

        header{ width: 100%;
        }
    }
</style>
