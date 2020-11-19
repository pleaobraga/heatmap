import { validationType } from './formValidation'

export const formData = {
  name: {
    name: 'name',
    label: 'Nome',
    value: '',
    type: 'text',
    validations: [{ name: validationType.REQUIRED }],
    error: {}
  }
}
