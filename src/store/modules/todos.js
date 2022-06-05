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
    },
    removeTodo(state, payload) {
      const removedItem = state.todos.findIndex((todo) => todo.id === payload);

      state.todos.splice(removedItem, 1);
    },
    activeTodos(state) {
      state.todos = state.todos.filter((todo) => todo.done === false);
    },
  },
  actions: {
    completingTodos(context, payload) {
      console.log("sdkfjlskdf");
      context.commit("completingTodos", payload);
    },
    remove(context, payload) {
      context.commit("removeTodo", payload);
    },
    addTodo(contex, payload) {
      contex.commit("addTodo", payload);
    },
    activeTodos(contex) {
      contex.commit("activeTodos");
    },
    // activeTodos(contex) {
    //   contex.commit("activeTodos");
    // },
  },
  getters: {
    todos(state) {
      return state.todos;
    },
    activeTodos(state) {
      return state.todos.filter((todo) => todo.done === false);
    },
  },
};
