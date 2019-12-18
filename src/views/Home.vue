<template>
  <v-content class="secondary">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-row align="center" justify="center">
            <div>
              <v-btn to="plant" class="mx-2" fab dark color="indigo">
                <v-icon dark>mdi-plus</v-icon>
              </v-btn>
              <p class="text-center">Plant</p>
            </div>
            <div>
              <v-btn to="grow" class="mx-2" fab dark color="indigo">
                <v-icon dark>mdi-plus</v-icon>
              </v-btn>
              <p class="text-center">Grow</p>
            </div>
            <div>
              <v-btn to="harvest" class="mx-2" fab dark color="indigo">
                <v-icon dark>mdi-plus</v-icon>
              </v-btn>
              <p class="text-center">Harvest</p>
            </div>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {
  },
  computed: {
    system() {
      return this.$store.getters.system;
    }
  },
  data() {
    return {};
  }
};
</script>
