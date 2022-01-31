<template>
  <v-app>
    <v-main>
      <v-img
        :src="require('./assets/images/bg-desktop-dark.jpg')"
        width="100%"
      ></v-img>
      <v-card
        width="576"
        class="mx-auto todo-card"
        outlined
        color="transparent"
      >
        <v-container>
          <v-row>
            <v-col>
              <h1>TODO</h1>
            </v-col>
            <v-col class="text-rigth d-flex justify-end">
              <v-icon>mdi-white-balance-sunny</v-icon>
            </v-col>
          </v-row>
          <v-card-text class="mt-5 px-0">
            <v-text-field
              solo
              flat
              background-color="rgb(37 39 60)"
              label="create a new todo..."
              v-model="newTodo"
              height="60"
              class="forminp"
            ></v-text-field>

            <div class="todolist">
              <v-list flat subheader color="rgb(37 39 60)">
                <v-list-item-group multiple active-class="">
                  <v-list-item class="list-item py-2 pl-6">
                    <template v-slot:default="{ active }">
                      <v-list-item-action>
                        <span class="checkbox-wrapper">
                          <div
                            class="circle d-flex justify-center align-center"
                            :class="{ gradient: active }"
                          >
                            <v-img
                              :src="require('./assets/images/icon-check.svg')"
                              class="check-icon"
                              v-show="active"
                              width="14"
                            ></v-img>
                            <div
                              class="inside-hole"
                              :class="{ gradient: active }"
                            ></div>
                          </div>
                        </span>
                      </v-list-item-action>

                      <v-list-item-content class="d-flex">
                        <v-list-item-title>home chores</v-list-item-title>
                      </v-list-item-content>
                      <v-spacer></v-spacer>
                      <span class="list-item-icons">
                        <v-icon class="list-item-icon mr-3">mdi-pencil</v-icon>
                        <v-icon class="list-item-icon">mdi-close</v-icon>
                      </span>
                    </template>
                  </v-list-item>

                  <v-list-item class="list-item py-2 pl-6">
                    <template v-slot:default="{ active }">
                      <v-list-item-action>
                        <span class="checkbox-wrapper">
                          <div
                            class="circle d-flex justify-center align-center"
                            :class="{ gradient: active }"
                          >
                            <v-img
                              :src="require('./assets/images/icon-check.svg')"
                              class="check-icon"
                              v-show="active"
                              width="14"
                            ></v-img>
                            <div
                              class="inside-hole"
                              :class="{ gradient: active }"
                            ></div>
                          </div>
                        </span>
                      </v-list-item-action>

                      <v-list-item-content>
                        <v-list-item-title>Sound</v-list-item-title>
                      </v-list-item-content>
                      <v-spacer></v-spacer>
                      <span class="list-item-icons">
                        <v-icon class="list-item-icon mr-3">mdi-pencil</v-icon>
                        <v-icon class="list-item-icon">mdi-close</v-icon>
                      </span>
                    </template>
                  </v-list-item>

                  <v-list-item class="list-item py-2 pl-6">
                    <template v-slot:default="{ active }">
                      <v-list-item-action>
                        <span class="checkbox-wrapper">
                          <div
                            class="circle d-flex justify-center align-center"
                            :class="{ gradient: active }"
                          >
                            <v-img
                              :src="require('./assets/images/icon-check.svg')"
                              class="check-icon"
                              v-show="active"
                              width="14"
                            ></v-img>
                            <div
                              class="inside-hole"
                              :class="{ gradient: active }"
                            ></div>
                          </div>
                        </span>
                      </v-list-item-action>

                      <v-list-item-content>
                        <v-list-item-title>going to work</v-list-item-title>
                      </v-list-item-content>
                      <v-spacer></v-spacer>
                      <span class="list-item-icons">
                        <v-icon class="list-item-icon mr-3">mdi-pencil</v-icon>
                        <v-icon class="list-item-icon">mdi-close</v-icon>
                      </span>
                    </template>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
              <v-row class="pt-2 px-6 todo-info">
                <v-col cols="3">
                  <span>1 item left</span>
                </v-col>
                <v-col
                  class="text-center d-flex align-content-center justify-space-evenly pl-0 pr-5 font-weight-bold"
                  cols="6"
                >
                  <span>All</span>
                  <span>Active</span>
                  <span>Completed</span>
                </v-col>
                <v-col class="text-right" cols="3">
                  <span>clear completed</span>
                </v-col>
              </v-row>
            </div>
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
export default {
  name: "App",

  data: () => ({
    newTodo: "",
  }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin:wght@500&display=swap");

html,
body {
  overflow: auto !important;
  font-size: 18px;
}

.justify-space-evenly {
  justify-content: space-evenly;
}

.font-small {
  font-size: 13px;
}

.v-application {
  font-family: "Josefin", sans-serif !important;
}

a {
  text-decoration: none;
  color: #777a92 !important;
}

h1 {
  letter-spacing: 20px;
}

.todo-card {
  margin-top: -260px;
}

.todolist {
  background-color: rgb(37 39 60);
}

.checkbox-wrapper {
  cursor: pointer;
  position: relative;
}

.circle {
  background-color: rgb(77 80 102);
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
}

.circle:hover {
  background: linear-gradient(90deg, #57ddff, #c058f3);
}

.inside-hole {
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(37, 39, 60);
}

.check-icon {
  position: absolute !important;
  z-index: 1000 !important;
}

.gradient {
  background: linear-gradient(90deg, #57ddff, #c058f3);
}

.list-item {
  border-bottom: 1px solid #616161;
  cursor: context-menu !important;
}

.list-item-icons {
  display: none;
}

.list-item:hover .list-item-icons {
  display: flex;
}

.list-item-icon {
  font-size: 30px !important;
  color: #616161 !important;
  cursor: pointer;
}

.list-item-icon:hover {
  color: #fff !important;
}

.todo-info span {
  color: #777a92;
}
</style>
