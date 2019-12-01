<template>
  <v-card :color="backgroundColor" flat>
    <v-list :color="backgroundColor">
      <v-list-item>
      <v-list-item-avatar>
        <v-icon>{{icon}}</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        {{message}}
      </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    system: {
      type: Object,
      required: true
    }
  },
  computed: {
    backgroundColor() {
      return this.$props.system.status;
    },
    message() {
      return this.$props.system.message;
    },
    icon() {
      return this.$props.system.icon;
    }
  }
}
</script>

<style lang="scss" scoped>
  #system-status {
    max-width: 410px;
  }
</style>