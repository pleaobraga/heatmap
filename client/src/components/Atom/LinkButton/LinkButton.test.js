import React from 'react'
import { mount } from 'enzyme'
import LinkButton from './LinkButton'

describe('LinkButton', () => {
  const handleCLick = jest.fn()

  const wrapper = mount(
    <LinkButton
      className="test"
      handleCLick={handleCLick}
      href="/"
      text="test"
    />
  )

  it('should render component properly', () => {
    expect(wrapper.find('.link-button').length).toBe(1)
  })

  it('should render other className', () => {
    expect(wrapper.find('.test').exists()).toBe(true)
  })

  it('should render text', () => {
    expect(wrapper.text()).toEqual('test')
  })

  it('should execute click function', () => {
    wrapper.simulate('click')

    expect(handleCLick.mock.calls.length).toBe(1)
  })
})
