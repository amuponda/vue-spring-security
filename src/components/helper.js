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
 for (const role of roles) {
   if (authorities.includes(role)) {
     return true
   }
 }
 return false
}