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
    ADDTODO(state, payload) {
      state.todos.push(payload);
    },

    COMPLETINGTODOS(state, payload) {
      const completedItem = state.todos.find((todo) => todo.id === payload);
      completedItem.done = !completedItem.done;
    },

    REMOVETODO(state, payload) {
      const removedItem = state.todos.findIndex((todo) => todo.id === payload);

      state.todos.splice(removedItem, 1);
    },

    CLEARCOMPLETEDTODOS(state) {
      state.todos = state.todos.filter((todo) => todo.done === false);
    },
  },

  actions: {
    completingTodos(context, payload) {
      context.commit("COMPLETINGTODOS", payload);
    },

    remove(context, payload) {
      context.commit("REMOVETODO", payload);
    },

    addTodo(contex, payload) {
      contex.commit("ADDTODO", payload);
    },

    clearCompletedTodos(context) {
      context.commit("CLEARCOMPLETEDTODOS");
    },
  },

  getters: {
    todos(state) {
      return state.todos;
    },
  },
};
