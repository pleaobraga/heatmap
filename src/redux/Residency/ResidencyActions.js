import { simulateRequest } from '../../utils/utils'

export const types = {
  GET_RESIDENCY_DATA: 'residency/get_residency_data',
  GET_RESIDENCY_SUCCESS: 'residency/get_residency_success',
  GET_RESIDENCY_ERROR: 'residency/get_residency_error'
}

export const getResidencyStart = () => ({
  type: types.GET_RESIDENCY_DATA
})

export const getResidencySuccess = (data) => ({
  type: types.GET_RESIDENCY_SUCCESS,
  data
})

export const getResidencyError = (error) => ({
  type: types.GET_RESIDENCY_ERROR,
  error
})

export const getResidency = () => (dispatch) => {
  dispatch(getResidencyStart())

  return simulateRequest({ title: 'Content', text: 'content text' })
    .then((response) => {
      dispatch(getResidencySuccess(response.data))
      return response.data
    })
    .catch((error) => getResidencyError(error))
}


