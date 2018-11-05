<template>
  <div v-if="show">
      <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'IfAllGranted',
    props: {
      roles: {
        type: Array,
        required: true
      },
      user: {
        type: Object,
        required: true,
        validator: function (value) {
          return value['authorities'] ? true : false
        }
      }
    },
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