import React from 'react'
import { mount } from 'enzyme'
import { formData } from '../../../utils/testsHelper'
import { Form } from '.'

const setup = (props = {}) => {
  const newProps = {
    title: 'Tests',
    formData: formData,
    className: 'test',
    postAPI: () => {},
    onSuccess: () => {},
    ...props
  }

  return mount(<Form {...newProps} />)
}

describe('Form', () => {
  const wrapper = setup()

  it('should render component properly', () => {
    expect(wrapper.find('.form').length).toBe(1)
  })
})
