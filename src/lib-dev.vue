<template>
  <div>
      <h1>Testing Component</h1>
      <sec-if-all-granted :roles="roles" :user="user">
          <p>All granted security check</p>
      </sec-if-all-granted>
      <sec-if-any-granted :roles="roles" :user="user">
          <p>Any granted security check</p>
      </sec-if-any-granted>
      <sec-if-not-granted :roles="roles" :user="user">
          <p>This will not show</p>
      </sec-if-not-granted>
  </div>
</template>

<script>
  import { SecIfAllGranted } from './entry'
  import { SecIfAnyGranted } from './entry'
  import { SecIfNotGranted } from "./entry"

  export default {
    components: {
      SecIfAllGranted,
      SecIfAnyGranted,
      SecIfNotGranted
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