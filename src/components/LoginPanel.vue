<template>
  <v-container class="accent">
    <v-row>
      <v-col>
        <v-btn color="primary" raised v-on:click="closePanel">
          <v-icon size="x-large">mdi-arrow-left-circle</v-icon>
          <span> go back</span>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <LoginForm target="settings" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LoginForm from "@/components/LoginForm";
export default {
  components: {
    LoginForm
  },
  methods: {
    closePanel() {
      this.$store.commit("closeLoginPanel");
    }
  }
};
</script>
