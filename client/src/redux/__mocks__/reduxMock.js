import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]

export const mockStore = configureStore(middlewares)

export const initialResidencyReducer = {
  data: [],
  isFetching: false,
  error: ''
}

export const initialStateRootReducer = {
  residency: {
    initialResidencyReducer
  }
}
