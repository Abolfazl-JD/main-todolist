<template>
  <div>
    <div class="header d-none d-sm-block">
      <v-img
        v-if="$vuetify.theme.dark"
        src="../assets/images/bg-desktop-light.jpg"
        width="100%"
        class="header-pic"
      ></v-img>
      <v-img
        v-else
        src="../assets/images/bg-desktop-dark.jpg"
        width="100%"
        class="header-pic"
      ></v-img>
    </div>
    <div class="header d-sm-none">
      <v-img
        v-if="$vuetify.theme.dark"
        src="../assets/images/bg-mobile-light.jpg"
        width="100%"
        class="header-pic"
      ></v-img>
      <v-img
        v-else
        src="../assets/images/bg-mobile-dark.jpg"
        width="100%"
        class="header-pic"
      ></v-img>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
