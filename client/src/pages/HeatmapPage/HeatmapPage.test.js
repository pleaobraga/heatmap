import React from 'react'
import { mount } from 'enzyme'
import HeatmapPage from './HeatmapPage'
import { Provider } from 'react-redux'
import {
  mockStore,
  initialResidencyReducer
} from '../../redux/__mocks__/reduxMock'

const setup = (state) => {
  const newState = {
    residency: {
      ...initialResidencyReducer,
      ...state
    }
  }

  const store = mockStore(newState)

  const contentPage = mount(
    <Provider store={store}>
      <HeatmapPage />
    </Provider>
  )

  return contentPage
}

describe('HeatmapPage', () => {
  it('should render loading correctly', () => {
    const wrapper = setup()

    expect(wrapper.find('.page-heatmap').length).toBe(1)
  })
})
