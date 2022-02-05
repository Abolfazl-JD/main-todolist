<template>
  <v-row class="pt-2 px-6 todo-info">
    <v-col cols="3 d-none d-lg-block">
      <span class="font-small">{{ leftItem }} item left</span>
    </v-col>
    <v-col
      class="text-center align-content-center font-weight-bold mx-auto"
      sm="12"
      md="6"
    >
      <span
        class="mr-5 pointer font-small"
        :class="showItems === 'all' ? 'primary--text' : ''"
        @click="changeItemShow('all')"
        >All</span
      >
      <span
        class="mr-5 pointer font-small"
        :class="showItems === 'active' ? 'primary--text' : ''"
        @click="changeItemShow('active')"
        >Active</span
      >
      <span
        class="pointer font-small"
        :class="showItems === 'completed' ? 'primary--text' : ''"
        @click="changeItemShow('completed')"
        >Completed</span
      >
    </v-col>
    <v-col class="text-right" cols="3 d-none d-lg-block">
      <span class="font-small">clear completed</span>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    showItems: {
      type: String,
      required: true,
    },

    leftItem: {
      type: Number,
      required: true,
    },
  },

  methods: {
    changeItemShow(status) {
      this.$emit("switchItemsShow", status);
    },
  },
};
</script>

<style scoped>
.todo-info span {
  color: #777a92;
}
</style>
