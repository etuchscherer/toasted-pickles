<template>
  <v-content>
    <v-container class="secondary">
      <v-row>
        <v-col>
          <v-card flat class="pa-4">
            System Status
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card class="pa-4" to="dashboard">
            <v-card-title>
              Monitor
              <v-icon large class="ma-2">mdi-tablet-dashboard</v-icon>
            </v-card-title>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-4" to="controls">
            <v-card-title>
              Controls
              <v-icon large class="ma-2">mdi-tools</v-icon>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {}
};
</script>
