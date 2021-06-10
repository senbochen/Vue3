<template>
  <div>
    <footer>
      <Button @click="open" :disabled="true">打开</Button>
      <p>{{ moneyFormat(count) }}</p>
    </footer>
  </div>
</template>

<script lang='ts'>
import { moneyFormat } from '@/tools/index'
import { ref } from 'vue'
import Button from '../Button/index.vue'

export default {
  name: 'Dialog',
  components: { Button },
  setup() {
    const open = () => {
      console.log('212')
    }
    const count = ref(218222213)
    return { open, count, moneyFormat }
  },
}
</script>
<style lang='scss' scoped>
</style>
