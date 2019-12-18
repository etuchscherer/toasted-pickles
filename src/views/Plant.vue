<template>
  <v-content class="secondary">
    <v-container>
      <v-row no-gutters>
        <v-col cols="12" class="py-0">
          <h1 class="text--text">Plant</h1>
        </v-col>
        <v-col cols="6 py-0">
          <v-list class="secondary py-0">
            <v-list-item two-line>
              <v-list-item-avatar>
                <v-icon class="primary">mdi-plus</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>Bay 1</v-list-item-title>
                <v-list-item-subtitle>vacant</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-avatar>
                <v-icon class="primary">mdi-plus</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>Bay 2</v-list-item-title>
                <v-list-item-subtitle>vacant</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>

        <v-col cols="6">
          <v-card max-height="160">
            <v-img height="140" contain src="@/assets/loading.gif" />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {};
</script>
