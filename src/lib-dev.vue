<template>
  <div>
      <h1>Testing Component</h1>
      <sec-if-all-granted :roles="roles" :user="user">
          <p>secure stuff here</p>
      </sec-if-all-granted>
  </div>
</template>

<script>
  import { SecIfAllGranted } from './entry'
  export default {
    components: {
      SecIfAllGranted
    },
    data () {
      return {
        user: {
          authorities: ['ROLE_USER', 'ROLE_SUPERVISOR']
        },
        roles: ['ROLE_SUPERVISOR', 'ROLE_ADMIN']
      }
    }
  }
</script>

<style scoped>

</style>