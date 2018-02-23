<template>
  <button @click="onClick"><slot></slot></button>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
button {
  background-color: yellow;
  width: 120px;
  height: 30px;
  border-radius: 10px;
}
</style>
