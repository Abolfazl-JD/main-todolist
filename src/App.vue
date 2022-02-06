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
            <v-text-field
              solo
              flat
              background-color="todolistColor"
              label="create a new todo..."
              v-model="newTodo"
              height="60"
              @keydown.enter="createNewItem"
            ></v-text-field>
            <v-list flat subheader color="todolistColor rounded" elevation="12">
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
        </v-container>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import HeaderPic from "@/components/HeaderPic.vue";
import HeaderTitle from "@/components/HeaderTitle.vue";
import TodoInfo from "@/components/TodoInfo.vue";
import TodoItem from "@/components/TodoItem.vue";
import { mapState } from "vuex";

export default {
  name: "App",

  data() {
    return {
      newTodo: "",
      visibility: "all",
    };
  },

  computed: {
    ...mapState(["todoList"]),
    activeItems() {
      return this.todoList.filter((item) => !item.completed);
    },
    filteredTodos() {
      if (this.visibility === "all") return this.todoList;
      else if (this.visibility === "active") return this.activeItems;
      else return this.todoList.filter((item) => item.completed);
    },
  },

  components: {
    HeaderPic,
    HeaderTitle,
    TodoInfo,
    TodoItem,
  },

  mounted() {
    this.$store.dispatch("getTodoList");
  },

  methods: {
    createNewItem() {
      this.$store.dispatch("createNewWorkTodo", this.newTodo);
      this.newTodo = "";
    },

    toggleList(status) {
      this.visibility = status;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Josefin:wght@500&display=swap");

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
  font-family: "Josefin", sans-serif !important;
}

.todo-card {
  margin-top: -260px;
}

.theme--light.v-icon:focus::after {
  opacity: 0 !important;
}

.theme--dark.v-icon:focus::after {
  opacity: 0 !important;
}
</style>
