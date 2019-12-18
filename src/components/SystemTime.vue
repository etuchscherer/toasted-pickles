<template>
  <span class="text--text">
    {{time}}
  </span>
</template>

<script>
export default {
  mounted() {
    // start system time
    this.$store.dispatch('startTime');
  },
  computed: {
    time() {
      return this.$store.getters.time;
    }
  }
}
</script>