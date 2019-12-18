<template>
  <v-content class="secondary">
    <v-container>
      <v-row no-gutters>
        <v-col cols="12">
          <h1 class="text--text">Grow</h1>
        </v-col>

      <v-col cols="3" sm="4">
        <div class="my-2">
          <v-btn text small>Lettuce</v-btn>
        </div>
        <div class="my-2">
          <v-btn text small>Basil</v-btn>
        </div>
      </v-col>

      <v-col cols="9">
        <v-card>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">OVERLINE</div>
              <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
              <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="80"
              color="grey"
            ></v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      </v-row>
    </v-container>

  </v-content>
</template>

<script>
export default {};
</script>
