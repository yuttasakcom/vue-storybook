import { configure } from '@storybook/vue'

import Vue from 'vue'
// import Vuex from 'vuex' // Vue plugins

// Import your custom components.
import Button from '../src/components/Button.vue'

// Install Vue plugins.
// Vue.use(Vuex)

// Register custom components.
Vue.component('app-button', Button)

function loadStories() {
  // You can require as many stories as you need.
  require('../src/stories')
}

configure(loadStories, module)
