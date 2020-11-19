import React from 'react'
import { mount } from 'enzyme'
import { TypeMessage } from './'

const setup = (props = {}) => {
  const newProps = {
    className: 'test',
    text: 'test',
    ...props
  }

  return mount(<TypeMessage {...newProps} />)
}

describe('TypeMessage', () => {
  describe('Default type', () => {
    const wrapper = setup()

    it('should render component properly', () => {
      expect(wrapper.find('.message').length).toBe(1)
    })

    it('should render other className', () => {
      expect(wrapper.find('.test').exists()).toBe(true)
    })

    it('should render text', () => {
      expect(wrapper.text()).toEqual('test')
    })

    it('should render normal type', () => {
      expect(wrapper.find('.message--normal').exists()).toBe(true)
    })
  })

  describe('Success type', () => {
    const wrapper = setup({ type: 'success' })

    it('should render component properly', () => {
      expect(wrapper.find('.message--success').length).toBe(1)
    })
  })

  describe('Error type', () => {
    const wrapper = setup({ type: 'error' })

    it('should render component properly', () => {
      expect(wrapper.find('.message--error').length).toBe(1)
    })
  })
})
