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
        <span class="mr-2">Settings</span>
        <v-icon>mdi-settings-outline</v-icon>
      </v-btn>
    </v-app-bar>

    <slideout-panel></slideout-panel>

    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  })
};
</script>
