<template>
  <v-row>
    <v-col>
      <h1 class="white--text">TODO</h1>
    </v-col>
    <v-col class="text-right d-flex justify-end">
      <v-icon
        @click="$vuetify.theme.dark = !$vuetify.theme.dark"
        color="yellow"
        >{{
          $vuetify.theme.dark ? "mdi-white-balance-sunny" : "mdi-weather-night"
        }}</v-icon
      >
    </v-col>
  </v-row>
</template>
