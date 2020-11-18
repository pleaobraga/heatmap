import { types } from './ResidencyActions'
const initialState = {
  data: [],
  isFetching: false,
  error: {}
}

const residency = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_RESIDENCY_DATA:
      return { ...state, isFetching: true }

    case types.GET_RESIDENCY_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false,
        errorContent: {}
      }

    case types.GET_RESIDENCY_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }

    default:
      return state
  }
}

export default residency
