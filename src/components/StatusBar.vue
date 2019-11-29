<template>
  <v-card :color="color" flat class="pa-4">
    <v-card-title class="white--text">System Status</v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true
    }
  }
}
</script>