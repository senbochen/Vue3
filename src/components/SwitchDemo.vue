<template>
  <div>
    <Switch v-model:value="bool" @click="open" :disabled="true" />
  </div>
</template>

<script lang='ts'>
import { ref } from 'vue'
import { Axios } from '@/api/index'
import Switch from '../librany/Switch/index.vue'

export default {
  components: { Switch },
  setup() {
    const bool = ref(false)
    const open = () => {
      Axios.request({
        url: 'https://bbs.hiwonder.com/api/bbs/v1.post/getBanner?type=index',
        data: {},
        method: 'GET',
      })
    }
    return { bool, open }
  },
}
</script>
<style lang='scss' scoped>
</style>
