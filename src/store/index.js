import { createStore } from "vuex";
import todos from "./modules/todos.js";

export default createStore({
  modules: { tDos: todos },
  state: {},
  getters: {},
  mutations: {},
  actions: {},
});
