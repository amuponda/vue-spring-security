<template>
    <div v-if="show">
        <slot></slot>
    </div>
</template>

<script>
 import props from './helper'
 export default {
   name: 'IfAnyGranted',
   props: props,
   computed: {
     show () {
       for (const role of this.roles) {
         if (this.user.authorities.includes(role)) {
           return true
         }
       }
       return false
     }
   }
 }
</script>

<style scoped>

</style>