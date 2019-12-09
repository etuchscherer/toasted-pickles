<template>
  <v-content>
    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title>Login</v-card-title>

            <v-card-text>
              <LoginForm />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import LoginForm from "@/components/LoginForm";

export default {
  components: {
    LoginForm
  },
  data() {
    return {};
  }
};
</script>
