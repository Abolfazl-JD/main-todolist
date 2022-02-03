import Vue from "vue";
import Vuex from "vuex";
import { uuid } from "./utils";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoList: [
      {
        name: "cooking",
        completed: false,
        id: uuid(),
      },
      {
        name: "studying",
        completed: false,
        id: uuid(),
      },
      {
        name: "go for a walk",
        completed: false,
        id: uuid(),
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
