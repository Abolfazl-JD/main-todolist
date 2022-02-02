import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      dark: {
        todolistColor: "#25273c",
        greyBorder: "#777a92",
        circleColor: "#4d5066",
        todoBorder: "#fff",
      },
      light: {
        todolistColor: "#fff",
        greyBorder: "#c0c5f0",
        circleColor: "#b3b9e8",
        todoBorder: "#b3b9e8",
      },
    },
  },
});
