<template>
  <div>
    <Switch v-model:value="bool" />
  </div>
</template>

<script lang='ts'>
import { ref } from 'vue'
import Switch from '../librany/Switch/index.vue'

export default {
  components: { Switch },
  setup() {
    const bool = ref(false)
    const open = () => {
      console.log('212', 21)
    }
    return { bool, open }
  },
}
</script>
<style lang='scss' scoped>
</style>
