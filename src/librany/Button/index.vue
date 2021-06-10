<template>
  <button v-bind="$attrs" type="button" :disabled="disabled">
    <slot />
  </button>
</template>

<script lang='ts'>
export default {
  name: 'Button',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },

}
</script>
<style lang='scss' scoped>
</style>
