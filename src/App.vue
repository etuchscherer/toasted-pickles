<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Gro-box</v-toolbar-title>
      <v-app-bar-nav-icon>
        <v-icon>
          mdi-leaf
        </v-icon>
      </v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-btn text>
        <span class="mr-2">Settings</span>
        <v-icon>mdi-settings-outline</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container class="grey lighten-5">
        <v-row>
          <v-col>
            <v-card flat class="pa-4">
              System Status
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card class="pa-4">
              <v-card-title>
                Monitor
                <v-icon large class="ma-2">mdi-tablet-dashboard</v-icon>
              </v-card-title>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="pa-4">
              <v-card-title>
                Control
                <v-icon large class="ma-2">mdi-tools</v-icon>
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    // HelloWorld
  },

  data: () => ({
    //
  })
};
</script>
