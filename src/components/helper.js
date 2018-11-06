let props = {
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

export default props