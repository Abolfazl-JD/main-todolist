<template>
  <v-app>
    <v-main>
      <HeaderPic />
      <v-card
        width="576"
        class="mx-auto todo-card px-5"
        outlined
        color="transparent"
      >
        <v-container>
          <HeaderTitle />
          <v-card-text class="mt-5 px-0">
            <v-row>
              <v-col cols="1" class="todolistColor icon-form">
                <v-icon class="mt-1 pointer" @click="checkAll"
                  >mdi-chevron-down</v-icon
                >
              </v-col>
              <v-col cols="11">
                <v-text-field
                  solo
                  flat
                  background-color="todolistColor"
                  label="create a new todo..."
                  v-model="newTodo"
                  height="60"
                  @keydown.enter="createNewItem"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-list
              flat
              subheader
              color="todolistColor rounded"
              elevation="12"
              v-if="todoList.length"
            >
              <v-list-item-group multiple>
                <TodoItem
                  v-for="workTodo of filteredTodos"
                  :key="workTodo.id"
                  :workTodo="workTodo"
                />
              </v-list-item-group>
              <TodoInfo
                :visibility="visibility"
                :leftItem="activeItems.length"
                @switchItemsShow="toggleList"
              />
            </v-list>
          </v-card-text>
        </v-container>
      </v-card>
      <p class="mt-13 body-2 text-center grey--text">
        Drag and Drop to render list
      </p>
      <div class="mt-12 text-center font-small">
        <span>Challenged by </span>
        <a href="https://www.frontendmentor.io?ref=challenge"
          >frontendmentor
        </a>
        <span>Coded by </span>
        <a href="https://github.com/abolfazl-hue">Abolfazl Jalildoost</a>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import HeaderPic from '@/components/HeaderPic.vue'
import HeaderTitle from '@/components/HeaderTitle.vue'
import TodoInfo from '@/components/TodoInfo.vue'
import TodoItem from '@/components/TodoItem.vue'
import { mapState } from 'vuex'
import { uuid } from './store/utils'

export default {
  name: 'App',

  data() {
    return {
      newTodo: '',
      visibility: 'all',
      toggleAll: true,
    }
  },

  computed: {
    ...mapState(['todoList']),
    activeItems() {
      return this.todoList.filter((item) => !item.completed)
    },
    filteredTodos() {
      if (this.visibility === 'all') return this.todoList
      else if (this.visibility === 'active') return this.activeItems
      else return this.todoList.filter((item) => item.completed)
    },
  },

  components: {
    HeaderPic,
    HeaderTitle,
    TodoInfo,
    TodoItem,
  },

  // mounted() {
  //   this.$store.dispatch("getTodoList");
  // },

  methods: {
    createNewItem() {
      const todoItem = {
        name: this.newTodo,
        id: uuid(),
        completed: false,
      }
      this.$store.commit('ADD_TODO', todoItem)
      this.$store.dispatch('saveTodo', todoItem)
      this.newTodo = ''
    },

    toggleList(status) {
      this.visibility = status
    },

    checkAll() {
      this.$store.dispatch('checkAll', this.toggleAll)
      this.toggleAll = !this.toggleAll
    },
  },

  async created() {
    await this.$store.dispatch('getTodoStore')
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Josefin:wght@500&display=swap');

html,
body {
  overflow: auto !important;
  font-size: 18px;
}

a {
  text-decoration: none;
  color: #777a92 !important;
}

h1 {
  letter-spacing: 20px;
}

.font-small {
  font-size: 13px;
}

.pointer {
  cursor: pointer;
}

.v-application {
  font-family: 'Josefin', sans-serif !important;
}

.todo-card {
  margin-top: -260px;
}

.icon-form {
  position: relative;
  height: 60px;
  top: 12px;
  right: -14px;
  border-radius: 10px 0px 0px 8px;
}

.theme--light.v-icon:focus::after {
  opacity: 0 !important;
}

.theme--dark.v-icon:focus::after {
  opacity: 0 !important;
}
</style>
