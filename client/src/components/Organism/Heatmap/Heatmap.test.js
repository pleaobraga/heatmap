import React from 'react'
import { mount } from 'enzyme'
import { Heatmap } from '.'

describe('Heatmap', () => {
  const wrapper = mount(
    <Heatmap
      heightAttribute="weight"
      data={[{ lat: 37, lng: -122, weight: 10 }]}
    />
  )

  it('should render component properly', () => {
    expect(wrapper.find(Heatmap).length).toBe(1)
  })
})
