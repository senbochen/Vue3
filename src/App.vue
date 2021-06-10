<template>
  <div id="app">
    <SwitchDemo />
    <Dialog />
  </div>
</template>

<script lang="ts">
import SwitchDemo from './components/SwitchDemo.vue'
import Dialog from './librany/Dialog/index.vue'

export default {
  name: 'App',
  components: { SwitchDemo, Dialog },
}
</script>

<style lang="scss">
</style>
