<template>
  <div id="app">
    <Menu />
  </div>
</template>

<script>
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style lang="scss">
  body {
    margin: 0;
  }
</style>
