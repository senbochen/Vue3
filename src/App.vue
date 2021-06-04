<template>
  <img alt="Vue logo" src="./assets/logo.png" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const Component = defineComponent({
  data() {
    return {
      message: 'Hello!',
    }
  },
  computed: {
    // 需要注释
    greeting(): string {
      return `${this.message}!`
    },

    // // 在使用setter进行计算时，需要对getter进行注释
    greetingUppercased(): number {
      return 1
    },
  },
})

export default Component
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
