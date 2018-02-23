<template>
  <div>
      <h1>App</h1>
    <app-button>I'm slot</app-button>
  </div>
</template>

<script>
import AppButton from './components/Button'
export default {
  components: {
    AppButton
  }
}
</script>

