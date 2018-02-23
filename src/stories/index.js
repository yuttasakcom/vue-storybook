import Vue from 'vue'

import { storiesOf } from '@storybook/vue'

import Button from '../components/Button.vue'

storiesOf('Button', module)
  .add('with slot', () => ({
    components: { Button },
    template: "<Button>I'm slot</Button>"
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
