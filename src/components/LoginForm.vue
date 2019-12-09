<template>
  <v-form>
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

    <v-btn class="mr-4" @click="submit">submit</v-btn>
  </v-form>
</template>

<script>
import firebase from "firebase";

export default {
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
      // console.log('submitting', this.form, this.form.email, this.form.password);
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(() => {
          this.$router.replace({ name: "settings" });
        })
        .catch(err => {
          console.log("error :: ", err);
          this.error = err.message;
        });
    }
  }
};
</script>
