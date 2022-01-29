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
                        <div class="checkbox" :class="{ gradient: active }">
                          <v-img
                            :src="require('./assets/images/icon-check.svg')"
                            class="check-icon"
                            v-show="active"
                            width="14"
                          ></v-img>
                        </div>
                      </v-list-item-action>

                      <v-list-item-content>
                        <v-list-item-title>Notification</v-list-item-title>
                      </v-list-item-content>
                    </template>
                  </v-list-item>

                  <v-list-item class="list-item py-2 pl-6">
                    <template v-slot:default="{ active }">
                      <v-list-item-action>
                        <div class="checkbox" :class="{ gradient: active }">
                          <v-img
                            :src="require('./assets/images/icon-check.svg')"
                            class="check-icon"
                            v-show="active"
                            width="14"
                          ></v-img>
                        </div>
                      </v-list-item-action>

                      <v-list-item-content>
                        <v-list-item-title>Sound</v-list-item-title>
                      </v-list-item-content>
                    </template>
                  </v-list-item>

                  <v-list-item class="list-item py-2 pl-6">
                    <template v-slot:default="{ active }">
                      <v-list-item-action>
                        <div class="checkbox" :class="{ gradient: active }">
                          <v-img
                            :src="require('./assets/images/icon-check.svg')"
                            class="check-icon"
                            v-show="active"
                            width="14"
                          ></v-img>
                        </div>
                      </v-list-item-action>

                      <v-list-item-content>
                        <v-list-item-title>Auto-add widgets</v-list-item-title>
                      </v-list-item-content>
                    </template>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </div>
          </v-card-text>
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

.v-application {
  font-family: "Josefin", sans-serif !important;
}

h1 {
  letter-spacing: 20px;
}

.todo-card {
  margin-top: -260px;
}

.checkbox {
  position: relative;
  width: 26px;
  height: 26px;
  border: 2px solid gray;
  border-radius: 50%;
  padding: 5px;
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
}
</style>
