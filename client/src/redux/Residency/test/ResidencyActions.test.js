import { initialResidencyReducer, mockStore } from '../../__mocks__/reduxMock'
import {
  types,
  getResidencyAction,
  getResidencyError,
  getResidencyStart,
  getResidencySuccess
} from '../ResidencyActions'

describe.only('ResidencyActions', () => {
  it('should dispatch getResidencyStart', () => {
    const payload = { type: types.GET_RESIDENCY_DATA }
    const store = mockStore(initialResidencyReducer)

    store.dispatch(getResidencyStart())

    const actions = store.getActions()
    expect(actions).toEqual([payload])
  })

  it('should dispatch getResidencySuccess', () => {
    const data = []
    const content = { data }
    const payload = { type: types.GET_RESIDENCY_SUCCESS, data }

    const store = mockStore(initialResidencyReducer)

    store.dispatch(getResidencySuccess(content))

    const actions = store.getActions()
    expect(actions).toEqual([payload])
  })

  it('should dispatch getResidencyError', () => {
    const error = 'error'
    const payload = { type: types.GET_RESIDENCY_ERROR, error }

    const store = mockStore(initialResidencyReducer)

    store.dispatch(getResidencyError(error))

    const actions = store.getActions()
    expect(actions).toEqual([payload])
  })
})
