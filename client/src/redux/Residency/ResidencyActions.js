import { getResidenceAPI } from '../../api/residency'

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

export const getResidencyAction = () => (dispatch) => {
  dispatch(getResidencyStart())

  return getResidenceAPI()
    .then((response) => {
      dispatch(getResidencySuccess(response.data))
      return response.data
    })
    .catch(() => {
      dispatch(getResidencyError('Ocorreu um erro ao acessar os dados salvos'))
    })
}
