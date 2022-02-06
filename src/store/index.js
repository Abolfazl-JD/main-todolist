/* eslint-disable no-unused-vars */
import Vue from "vue";
import Vuex from "vuex";
import { uuid } from "./utils";
import EventService from "../services/EventService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoList: [],
  },

  mutations: {
    SET_TODOWRKS(state, items) {
      state.todoList = items;
    },

    CHAGE_STATUS(state, workTodo) {
      workTodo.completed = !workTodo.completed;
    },

    ADD_TODO(state, item) {
      state.todoList.push(item);
    },

    DELETE_TODO(state, id) {
      state.todoList = state.todoList.filter((item) => item.id !== id);
    },

    CHECK_ALL(state, value) {
      for (const item of state.todoList) {
        item.completed = value;
      }
    },
  },

  actions: {
    async getTodoList({ commit }) {
      const res = await EventService.getWorks();
      commit("SET_TODOWRKS", res.data);
    },

    async changeStatus({ commit }, workTodo) {
      const res = await EventService.changeStatus(workTodo);
      commit("CHAGE_STATUS", workTodo);
      console.log(res.data);
    },

    createNewWorkTodo({ commit }, newTodo) {
      EventService.addWork({
        name: newTodo,
        completed: false,
        id: uuid(),
      }).then((res) => {
        console.log(res.data);
        commit("ADD_TODO", res.data);
      });
    },

    deleteItem({ commit }, id) {
      EventService.deleteTodo(id).then(() => {
        commit("DELETE_TODO", id);
      });
    },

    editItem({ commit }, item) {
      EventService.changeItem(item).then((res) => {
        console.log(res.data);
      });
    },
  },
  modules: {},
});
