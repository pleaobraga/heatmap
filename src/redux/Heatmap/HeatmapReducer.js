import { types } from './HeatmapActions'

const initialState = {
  data: [],
  isFetching: false,
  error: {}
}

const heatmap = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_HEATMAP_DATA:
      return { ...state, isFetching: true }

    case types.GET_HEATMAP_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false,
        errorContent: {}
      }

    case types.GET_HEATMAP_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }

    default:
      return state
  }
}

export default heatmap
