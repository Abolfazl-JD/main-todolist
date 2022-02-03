<template>
  <v-row class="pt-2 px-6 todo-info">
    <v-col cols="3 d-none d-lg-block">
      <span class="font-small">1 item left</span>
    </v-col>
    <v-col
      class="text-center align-content-center font-weight-bold mx-auto"
      sm="12"
      md="6"
    >
      <span class="mr-5 pointer font-small">All</span>
      <span class="mr-5 pointer font-small">Active</span>
      <span class="pointer font-small">Completed</span>
    </v-col>
    <v-col class="text-right" cols="3 d-none d-lg-block">
      <span class="font-small">clear completed</span>
    </v-col>
  </v-row>
</template>

<style scoped>
.todo-info span {
  color: #777a92;
}
</style>
