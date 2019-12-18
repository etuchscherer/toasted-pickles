<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Gro-box</v-toolbar-title>
      <v-app-bar-nav-icon to="/">
        <v-icon>
          mdi-leaf
        </v-icon>
      </v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-btn text to="/settings">
        <span class="mr-2">configure</span>
      </v-btn>

      <v-btn text to="/settings">
        <span class="mr-2">log in</span>
      </v-btn>
    </v-app-bar>

    <slideout-panel :class="shouldOpenLoginPanel"></slideout-panel>
    <router-view />
  </v-app>
</template>

<script>
import LoginPanel from "@/components/LoginPanel";

export default {
  name: "App",

  data: () => ({
    //
  }),
  computed: {
    shouldOpenLoginPanel() {
      const { shouldOpenLoginPanel } = this.$store.getters;

      if (shouldOpenLoginPanel) {
        const panel = this.$showPanel({
          component: LoginPanel
        });

        this.$store.commit("setPanelInstance", panel);
      }

      return shouldOpenLoginPanel;
    }
  }
};
</script>
