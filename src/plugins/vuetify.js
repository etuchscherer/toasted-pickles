import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

const opts = {
  theme: {
    themes: {
      light: {
        primary: "#1F5855",
        // secondary: "#49D782",
        secondary: "#4CAF50",
        accent: "#C4E197",
        success: "#49D782",
        error: "#C73651",
        text: "#F5F5DF"
      }
    }
  }
};

export default new Vuetify(opts);
