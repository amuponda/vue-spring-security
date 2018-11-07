<template>
  <div v-if="show">
      <slot></slot>
  </div>
</template>

<script>
  import { props } from './helper'
  export default {
    name: 'IfAllGranted',
    props: props,
    computed: {
      show () {
        for (let i = 0; i < this.roles.length; i++) {
          if (!this.user.authorities.includes(this.roles[i])) {
            return false
          }
        }
        return true
      }
    }
  }
</script>