<template>
    <ul class="todo-list">
        <todo-item v-for="todo in todos" :key="todo.id" :tdo="todo"></todo-item>

    </ul>
</template>
<script>

import TodoItem from './TodoItem.vue'
export default {
    components: { TodoItem },
    props: ['todos']

}
</script>
<style scoped>
.todo-list {
    list-style: none;
}
</style>
