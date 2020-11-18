import { simulateRequest } from '../../utils/utils'

export const types = {
  GET_HEATMAP_DATA: 'heatmap/get_heatmap_data',
  GET_HEATMAP_SUCCESS: 'heatmap/get_heatmap_success',
  GET_HEATMAP_ERROR: 'heatmap/get_heatmap_error'
}

export const getHeatmapDataStart = () => ({
  type: types.GET_HEATMAP_DATA
})

export const getHeatmapDataSuccess = (data) => ({
  type: types.GET_HEATMAP_SUCCESS,
  data
})

export const getHeatmapDataError = (error) => ({
  type: types.GET_HEATMAP_ERROR,
  error
})

export const getHeatmapData = () => (dispatch) => {
  dispatch(getHeatmapDataStart())

  return simulateRequest({ title: 'Content', text: 'content text' })
    .then((response) => {
      dispatch(getHeatmapDataSuccess(response.data))
      return response.data
    })
    .catch((error) => getHeatmapDataError(error))
}

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
