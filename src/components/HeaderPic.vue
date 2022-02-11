<template>
  <div>
    <div class="header d-none d-sm-block">
      <v-img
        v-show="$vuetify.theme.dark"
        src="../assets/images/bg-desktop-light.jpg"
        width="100%"
        class="header-pic"
      ></v-img>
      <v-img
        v-show="!$vuetify.theme.dark"
        src="../assets/images/bg-desktop-dark.jpg"
        width="100%"
        class="header-pic"
      ></v-img>
    </div>
    <div class="header d-sm-none">
      <v-img
        v-show="$vuetify.theme.dark"
        src="../assets/images/bg-mobile-light.jpg"
        width="100%"
        class="header-pic"
      ></v-img>
      <v-img
        v-show="!$vuetify.theme.dark"
        src="../assets/images/bg-mobile-dark.jpg"
        width="100%"
        class="header-pic"
      ></v-img>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 820px) {
  .header-pic {
    padding-top: 100px;
  }
}
</style>
