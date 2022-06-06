import { createStore } from "vuex";
import todos from "./modules/todos.js";

export default createStore({
  modules: { tDos: todos },
  state() {
    return { isDark: false };
  },
  mutations: {
    showDarkMode(state) {
      state.isDark = !state.isDark;
    },
  },
  actions: {
    showDarkMode(context) {
      context.commit("showDarkMode");
    },
  },
  getters: {
    isDark(state) {
      return state.isDark;
    },
  },
});
