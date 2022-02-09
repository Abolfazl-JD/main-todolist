<template>
  <v-row class="pt-2 px-6 todo-info">
    <v-col cols="3 d-none d-lg-block">
      <span class="font-small">{{ pluralize }} left</span>
    </v-col>
    <v-col
      class="text-center align-content-center font-weight-bold mx-auto"
      sm="12"
      md="6"
    >
      <span
        class="mr-5 pointer font-small"
        :class="{ 'primary--text': visibility === 'all' }"
        @click="changeItemShow('all')"
        >All</span
      >
      <span
        class="mr-5 pointer font-small"
        :class="{ 'primary--text': visibility === 'active' }"
        @click="changeItemShow('active')"
        >Active</span
      >
      <span
        class="pointer font-small"
        :class="{ 'primary--text': visibility === 'completed' }"
        @click="changeItemShow('completed')"
        >Completed</span
      >
    </v-col>
    <v-col class="text-right" cols="3 d-none d-lg-block">
      <span class="font-small pointer" @click="clearDoneItems"
        >clear completed</span
      >
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    visibility: {
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
      this.$emit('switchItemsShow', status)
    },

    clearDoneItems() {
      this.$store.dispatch('removeDoneItems')
    },
  },

  computed: {
    pluralize() {
      return `${this.leftItem} item${this.leftItem === 1 ? '' : 's'}`
    },
  },
}
</script>

<style scoped>
.todo-info span {
  color: #777a92;
}
</style>
