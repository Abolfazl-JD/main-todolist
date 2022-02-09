/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Vuex from 'vuex'
import { uuid } from './utils'
import EventService from '../services/EventService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [],
    database: null,
  },

  mutations: {
    SET_TODOWRKS(state, items) {
      state.todoList = items
    },

    CHAGE_STATUS(state, workTodo) {
      workTodo.completed = !workTodo.completed
    },

    ADD_TODO(state, item) {
      state.todoList.push(item)
    },

    DELETE_TODO(state, id) {
      state.todoList = state.todoList.filter((item) => item.id !== id)
    },

    CHANGE_ITEM(state, item) {
      state.todoList.find((todo) => todo.name === item.name).name = item.name
    },

    CHECK_ALL(state, value) {
      for (const item of state.todoList) {
        item.completed = value
      }
    },
  },

  actions: {
    async changeStatus({ commit }, workTodo) {
      const res = await EventService.changeStatus(workTodo)
      commit('CHAGE_STATUS', workTodo)
      console.log(res.data)
    },

    createNewWorkTodo({ commit }, newTodo) {
      EventService.addWork({
        name: newTodo,
        completed: false,
        id: uuid(),
      }).then((res) => {
        console.log(res.data)
        commit('ADD_TODO', res.data)
      })
    },

    deleteItem({ commit }, id) {
      EventService.deleteTodo(id).then(() => {
        commit('DELETE_TODO', id)
      })
    },

    checkAll({ commit, state, dispatch }, value) {
      commit('CHECK_ALL', value)
      for (const todoItem of state.todoList) {
        dispatch('saveTodo', todoItem)
      }
    },

    async getTodoStore({ state, dispatch, commit }) {
      state.database = await dispatch('getDatabase')

      return new Promise((resolve, reject) => {
        const transaction = state.database.transaction('todos', 'readonly')
        const store = transaction.objectStore('todos')

        let todoList = []

        store.openCursor().onsuccess = (event) => {
          const cursor = event.target.result
          if (cursor) {
            todoList.push(cursor.value)
            cursor.continue()
          }
        }

        transaction.oncomplete = () => {
          resolve(todoList)
        }

        transaction.onerror = (event) => {
          reject(event)
        }
      }).then((data) => commit('SET_TODOWRKS', data))
    },

    async saveTodo({ state, dispatch }, todo) {
      state.database = await dispatch('getDatabase')

      return new Promise((resolve, reject) => {
        const transaction = state.database.transaction('todos', 'readwrite')
        const store = transaction.objectStore('todos')

        store.put(todo)
        transaction.oncomplete = () => {
          resolve('Item successfully saved')
        }
        transaction.onerror = (event) => {
          reject(event)
        }
      })
    },

    async getDatabase({ state }) {
      return new Promise((resolve, reject) => {
        if (state.database) resolve(state.database)

        let request = window.indexedDB.open('todomvcDB', 1)

        request.onerror = (event) => {
          console.error('ERROR: Unable to open database', event)
          reject('Error')
        }

        request.onsuccess = (event) => {
          state.database = event.target.result
          resolve(state.database)
        }

        request.onupgradeneeded = (event) => {
          let database = event.target.result
          database.createObjectStore('todos', {
            autoIncrement: true,
            keyPath: 'id',
          })
        }
      })
    },
  },
  modules: {},
})
