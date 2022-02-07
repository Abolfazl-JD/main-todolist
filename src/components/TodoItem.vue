<template>
  <v-list-item class="list-item py-2 pl-6">
    <v-list-item-action>
      <span class="checkbox-wrapper pointer" @click="toggleCompleted">
        <div
          class="circle d-flex justify-center align-center circleColor"
          :class="{ gradient: workTodo.completed }"
        >
          <v-img
            :src="require('../assets/images/icon-check.svg')"
            class="check-icon"
            v-show="workTodo.completed"
            width="14"
          ></v-img>
          <div
            class="inside-hole todolistColor"
            :class="{ gradient: workTodo.completed }"
          ></div>
        </div>
      </span>
    </v-list-item-action>

    <v-list-item-content class="d-flex">
      <v-list-item-title
        ><span v-show="!editenability">{{ workTodo.name }}</span>
        <v-text-field
          v-model="workTodo.name"
          v-show="editenability"
          @keydown.enter="edit"
          @keydown.esc="editenability = false"
          autofocus
        ></v-text-field>
      </v-list-item-title>
    </v-list-item-content>
    <v-spacer></v-spacer>
    <span class="list-item-icons hidden-md-and-up">
      <v-icon class="list-item-icon pointer mr-3" @click="editenability = true"
        >mdi-pencil</v-icon
      >
      <v-icon class="list-item-icon pointer" @click="remove">mdi-close</v-icon>
    </span>
  </v-list-item>
</template>

<script>
export default {
  props: {
    workTodo: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      editenability: false,
    };
  },

  methods: {
    toggleCompleted() {
      this.$store.commit("CHAGE_STATUS", this.workTodo);
    },

    remove() {
      this.$store.commit("DELETE_TODO", this.workTodo.id);
    },

    edit() {
      this.editenability = false;
    },
  },
};
</script>

<style scoped>
.list-item {
  border-bottom: 1px solid var(--v-greyBorder-base);
  cursor: context-menu !important;
}

.list-item:hover .list-item-icons {
  display: flex !important;
}

.list-item-icon {
  font-size: 30px !important;
  color: #616161 !important;
}

.checkbox-wrapper {
  position: relative;
}

.circle {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
}

.circle:hover {
  background: linear-gradient(90deg, #57ddff, #c058f3);
}

.check-icon {
  position: absolute !important;
  z-index: 1000 !important;
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
}

.gradient {
  background: linear-gradient(90deg, #57ddff, #c058f3);
}
</style>
