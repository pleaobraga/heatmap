import axios from 'axios'

const RESIDENCY_API_URL = 'http://localhost:3000/residency'

const headers = {
  'Content-Type': 'application/json'
}

export const getResidenceAPI = () => axios.get(RESIDENCY_API_URL, headers)

export const postResidenceAPI = (data) =>
  axios.post(RESIDENCY_API_URL, data, headers)
