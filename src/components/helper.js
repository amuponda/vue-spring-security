export let props = {
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
}

export let ifAnyGranted = (roles, authorities) => {
 for (let i = 0; i < roles.length; i++) {
   if (authorities.includes(roles[i])) {
     return true
   }
 }
 return false
}