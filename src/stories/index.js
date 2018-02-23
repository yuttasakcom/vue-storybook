import Vue from 'vue'

import { storiesOf } from '@storybook/vue'

import Button from '../components/Button.vue'

storiesOf('Button', module)
  .add('with slot', () => ({
    components: { Button },
    template: "<app-button>I'm slot</app-button>" // app-button from .storybook/config.js
  }))
  .add('with event', () => ({
    components: { Button },
    template: `<Button @click="onClick">click me!</Button>`,
    methods: {
      onClick() {
        alert('event click')
      }
    }
  }))
