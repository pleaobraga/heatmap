import { validationType } from '../../utils/formValidation'

export const formData = {
  cep: {
    name: 'cep',
    label: 'CEP',
    value: '',
    type: 'number',
    validations: [{ name: validationType.REQUIRED }],
    error: {}
  },
  number: {
    name: 'number',
    label: 'Número',
    value: '',
    type: 'number',
    validations: [
      { name: validationType.REQUIRED },
      { name: validationType.MIN, value: 1 }
    ],
    error: {}
  },
  lat: {
    name: 'lat',
    label: 'Latitude',
    value: '',
    type: 'number',
    validations: [
      { name: validationType.REQUIRED },
      { name: validationType.MAX, value: 90 },
      { name: validationType.MIN, value: -90 },
      { name: validationType.COORDINATE }
    ],
    error: {}
  },
  lng: {
    name: 'lng',
    label: 'Longitude',
    value: '',
    type: 'number',
    validations: [
      { name: validationType.REQUIRED },
      { name: validationType.MAX, value: 180 },
      { name: validationType.MIN, value: -180 },
      { name: validationType.COORDINATE }
    ],
    error: {}
  },
  residents: {
    name: 'residents',
    label: 'Número de habitantes',
    value: '',
    type: 'number',
    validations: [{ name: validationType.REQUIRED }],
    error: {}
  }
}
