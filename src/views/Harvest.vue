<template>
  <v-content class="secondary">
    <v-container>
      <v-row no-gutters>
        <v-col cols="12">
          <h1 class="text--text">Harvest</h1>
        </v-col>

        <v-col cols="3">
          <div class="my-2">
            <v-btn text small>Lettuce</v-btn>
          </div>
          <div class="my-2">
            <v-btn text small>Basil</v-btn>
          </div>
        </v-col>

        <v-col cols="9">
          <v-card
              class="mx-auto"
              max-width="344"
            >
              <v-card-text>
                <div>Word of the Day</div>
                <div class="text--primary">
                  well meaning and kindly.<br>
                  "a benevolent smile"
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  text
                  color="deep-purple accent-4"
                >
                  Learn More
                </v-btn>
              </v-card-actions>
            </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {

}
</script>