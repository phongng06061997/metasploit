<template>
  <v-app id="inspire">
    <v-main>
      <v-container fluid fill-height>
        <v-row align="center" justify="center">
          <v-col class="col-12 d-flex justify-center">
            <v-card class="elevation-12" width="100%" max-width="400">
              <v-form @submit.prevent="login">
                <v-toolbar color="primary" dark flat>
                  <v-toolbar-title
                    >Sign in to start the session</v-toolbar-title
                  >
                </v-toolbar>
                <v-card-text>
                  <v-text-field
                    v-model="credentials.username"
                    name="login"
                    prepend-icon="person"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    v-model="credentials.password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                  ></v-text-field>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn type="submit" color="primary"> Login </v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      credentials: {
        username: "",
        password: "",
      },
    };
  },
  computed: {},
  methods: {
    login() {},
  },
};
</script>

<style>
</style>
