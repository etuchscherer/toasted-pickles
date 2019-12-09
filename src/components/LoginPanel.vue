<template>
  <v-content>
    <h1>This is the panel</h1>
    <v-btn v-on:click="closePanel">Close</v-btn>
  </v-content>
</template>

<script>
export default {
  methods: {
    closePanel() {
      this.$emit("closePanel", {});
    }
  }
}
</script>