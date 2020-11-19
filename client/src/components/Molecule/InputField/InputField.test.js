import React from 'react'
import { mount } from 'enzyme'
import { InputField } from '.'

const setup = (props = {}) => {
  const newProps = {
    className: 'test',
    label: 'label',
    value: '',
    name: 'test',
    onChange: () => {},
    error: {},
    ...props
  }

  return mount(<InputField {...newProps} />)
}

describe('InputField', () => {
  describe('Default behavior', () => {
    const wrapper = setup()

    it('should render component properly', () => {
      expect(wrapper.find('.input-field').length).toBe(1)
    })

    it('should render other className', () => {
      expect(wrapper.find('.test').exists()).toBe(true)
    })

    it('should render label', () => {
      expect(wrapper.find('label').exists()).toBe(true)
    })
  })

  describe('error behavior', () => {
    const wrapper = setup({ error: { hasError: true, message: 'error' } })

    it('should render error properly', () => {
      expect(wrapper.find('.input-field--error').length).toBe(1)
    })

    it('should render error message', () => {
      expect(wrapper.find('.input-field__erro-message').exists()).toBe(true)
    })
  })
})
