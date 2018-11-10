import { mount } from '@vue/test-utils'
import IfAllGranted from './components/IfAllGranted.vue'

describe('IfAllGranted', () => {
  const slotContent = '<p>secured shit</p>'
  const wrapper = mount(IfAllGranted, {
    propsData: {
      roles: ['ROLE_ADMIN'],
      user: { authorities: ['ROLE_ADMIN'] }
    },
    slots: {
      'default': slotContent
    }
  })

  it('with authorised user', () => {
    expect(wrapper.html()).toContain(slotContent)
  })
})