<template>
  <v-card :color="backgroundColor" flat class="pa-4">
    <v-card-title class="white--text">System Status</v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    state: {
      type: String,
      required: true
    }
  },
  computed: {
    backgroundColor() {
      console.log('this state is :: ', this.$props.state);
      return this.$props.state;
    }
  }
}
</script>