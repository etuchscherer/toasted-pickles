<template>
  <v-form color="red" v-on:submit.prevent="submit">
    <v-text-field
      v-model="form.email"
      label="email"
      placeholder="email"
      required
      outlined
    ></v-text-field>

    <v-text-field
      v-model="form.password"
      type="password"
      label="password"
      placeholder="password"
      required
      outlined
    ></v-text-field>

    <v-btn type="submit" color="primary" raised class="mr-4">submit</v-btn>
  </v-form>
</template>

<script>
import firebase from "firebase";

export default {
  props: {
    target: String
  },
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    submit() {
      const { $store, $router, form } = this;

      firebase
        .auth()
        .signInWithEmailAndPassword(form.email, form.password)
        .then(() => {
          $store.commit("closeLoginPanel");
          $router.replace({ name: $store.getters.loginTarget });
        })
        .catch(err => {
          console.log("error :: ", err);
          this.error = err.message;
        });
    }
  }
};
</script>
