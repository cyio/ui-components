import { mount } from '@vue/test-utils'
import Modal from '.'

describe('Modal show', () => {
  const wrapper = mount(Modal, {
    // attachToDocument: true,
    sync: false,
    propsData: {
      title: 'hello',
      show: true,
    }
  })
  it('modal should be visible', () => {
    expect(wrapper.isVisible()).toBe(true)
  })
  it('modal should be invisible by click `X` button', () => {
    wrapper.find('.modal-close').trigger('click')
    expect(wrapper.emitted().close).toBeTruthy()
  })
  // sync 设为 false，会影响判断
  // it('modal should be invisible by pass prop', () => {
  // wrapper.setProps({ show: false })
  // expect(wrapper.isVisible()).toBe(false)
  // })
  it('modal should have title `hello`', () => {
    expect(wrapper.find('.modal-title').text()).toBe('hello')
  })
})
