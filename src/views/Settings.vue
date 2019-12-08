<template>
  <v-content>
    <h1>This is the settings page</h1>

    <h2>logout ::
      <v-btn type="button" v-on:click="logout">Logout</v-btn>
    </h2>
  </v-content>
</template>

<script>
import firebase from 'firebase';

export default {
  methods: {
    logout() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('home');
      });
    }
  }
};
</script>
