<template>
    <div v-if="show">
        <slot></slot>
    </div>
</template>

<script>
 import { props, ifAnyGranted } from './helper'
 export default {
   name: 'IfNotGranted',
   props: props,
   computed: {
     show () {
       return !ifAnyGranted(this.roles, this.user.authorities)
     }
   }
 }
</script>