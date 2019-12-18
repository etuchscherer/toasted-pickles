// Imports
import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import store from "../../src/store"
import { makeDecorator } from '@storybook/addons'

// Utilities
import deepmerge from 'deepmerge'

// Vuetify
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.min.css'

Vue.use(Vuetify);
Vue.use(Vuex);

export default makeDecorator({
  name: 'withVuetify',
  parameterName: 'vuetify',
  wrapper: (storyFn, context, { parameters = {} }) => {
    // Reduce to one new URL?
    const searchParams = new URL(window.location).searchParams
    const dark = searchParams.get('eyes-variation') === 'dark'
    const rtl = searchParams.get('eyes-variation') === 'rtl'
    const vuetify = new Vuetify(
      deepmerge(
        {
          rtl,
          theme: {
            themes: {
              light: {
                primary: "#1F5855",
                secondary: "#49D782",
                accent: "#C4E197",
                error: "#C73651",
                text: "#F5F5DF"
              }
            }
          }
        },
        parameters
      )
    );
    const WrappedComponent = storyFn(context)

    return Vue.extend({
      store,
      vuetify,
      components: { WrappedComponent },
      template: `
        <v-app>
          <v-container fluid>
            <wrapped-component />
          </v-container>
        </v-app>
      `
    })
  }
})
