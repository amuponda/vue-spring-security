<template>
  <div v-if="show">
      <slot></slot>
  </div>
</template>

<script>
  import props from './helper'
  export default {
    name: 'IfAllGranted',
    props: props,
    computed: {
      show () {
        for (const role of this.roles) {
          if (!this.user.authorities.includes(role)) {
            return false
          }
        }
        return true
      }
    }
  }
</script>