import uniqid from "uniqid";
export default {
  namespaced: true,
  state() {
    return {
      todos: [
        {
          id: uniqid(),
          todo: "Complete online JavaScript course",
          done: false,
        },
        { id: uniqid(), todo: "10 minutes meditation", done: false },
        { id: uniqid(), todo: "Read for 1 hour", done: false },
      ],
    };
  },
  mutations: {
    addTodo(state, payload) {
      state.todos.push(payload);
    },
    completingTodos(state, payload) {
      const completedItem = state.todos.find((todo) => todo.id === payload);
      completedItem.done = !completedItem.done;
      console.log(state);
    },
    removeTodo(state, payload) {
      const removedItem = state.todos.findIndex((todo) => todo.id === payload);

      state.todos.splice(removedItem, 1);
    },
    clearCompletedTodos(state) {
      const cleared = state.todos.filter((todo) => todo.done === false);
      state.todos = cleared;
      return state.todos;
    },
  },
  actions: {
    completingTodos(context, payload) {
      context.commit("completingTodos", payload);
    },
    remove(context, payload) {
      context.commit("removeTodo", payload);
    },
    addTodo(contex, payload) {
      contex.commit("addTodo", payload);
    },
    clearCompletedTodos(context) {
      context.commit("clearCompletedTodos");
    },
  },
  getters: {
    todos(state) {
      return state.todos;
    },
    activeTodos(state) {
      state.todos = state.todos.filter((todo) => todo.done === false);
      return state.todos;
    },
    completedTodos(state) {
      return state.todos.filter((todo) => todo.done === true);
    },
  },
};
