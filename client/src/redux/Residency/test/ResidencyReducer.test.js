import { initialResidencyReducer } from '../../__mocks__/reduxMock'
import residencyReducer from '../ResidencyReducer'
import { types } from '../ResidencyActions'

describe('residencyReducer', () => {
  it('should return the initial state', () => {
    expect(residencyReducer(undefined, {})).toEqual(initialResidencyReducer)
  })

  it(`should handle ${types.GET_RESIDENCY_DATA}`, () => {
    const payload = { type: types.GET_RESIDENCY_DATA }
    const actualState = { ...initialResidencyReducer, isFetching: true }

    expect(residencyReducer(undefined, payload)).toEqual(actualState)
  })

  it(`should handle ${types.GET_RESIDENCY_SUCCESS}`, () => {
    const data = []
    const payload = { type: types.GET_RESIDENCY_SUCCESS, data }
    const actualState = {
      ...initialResidencyReducer,
      data,
      isFetching: false,
      error: ''
    }

    expect(residencyReducer(undefined, payload)).toEqual(actualState)
  })

  it(`should handle ${types.GET_RESIDENCY_ERROR}`, () => {
    const error = 'error'
    const payload = { type: types.GET_RESIDENCY_ERROR, error }
    const actualState = {
      ...initialResidencyReducer,
      isFetching: false,
      error
    }

    expect(residencyReducer(undefined, payload)).toEqual(actualState)
  })
})
