<template>
    <header>
        <div class="title">
            <p class="title__heading">todo</p>
            <div class="title__moon">
                <img src="./../../assets/images/icon-moon.svg" alt="moon" />
            </div>
            <div class="title__sun">
                <img src="i./../../assets/images/icon-sun.svg" alt="sun" />
            </div>
        </div>
        <div class="add-todo">
            <div class="add-todo__icon-input"></div>
            <input @keydown.enter="addTodo" type="text" name="todo" id="todo" placeholder="Create a new to do..."
                v-model="todo">

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
        }
    }
}
</script>
<style scoped>
header {
    width: 50rem;
    margin: 0 auto;
}

.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;

}

.title__moon {
    cursor: pointer;
}

.title__sun {
    display: none;
}

.title__heading {
    text-transform: uppercase;
    letter-spacing: 1.1rem;
    font-weight: 700;
    color: white;
    font-size: 3.2rem;
}

.add-todo {
    position: relative;
    margin-bottom: 2.5rem;
}

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
}

#todo::-webkit-input-placeholder {
    font-family: "Josefin Sans";
    color: hsl(236, 9%, 61%);

}
</style>
