import { isNil, isEmpty } from 'lodash'

export const validationType = {
  REQUIRED: 'REQUIRED',
  NUMBER: 'NUMBER',
  MAX: 'MAX',
  MIN: 'MIN',
  COORDINATE: 'COORDINATE'
}

export const formValidations = (value, validation) => {
  switch (validation.name) {
    case validationType.REQUIRED:
      if (value === '' || isNil(value)) {
        return { hasError: true, message: 'Campo obrigatório' }
      }

      return {}

    case validationType.NUMBER: {
      const regex = new RegExp(/^\\d+$/, 'gm')

      if (regex.test(value)) {
        return { hasError: true, message: 'Digite apenas números' }
      }

      return {}
    }

    case validationType.MAX:
      if (value > validation.value) {
        return {
          hasError: true,
          message: `Digite um valor menor que ${validation.value}`
        }
      }

      return {}

    case validationType.MIN:
      if (value < validation.value) {
        return {
          hasError: true,
          message: `Digite um valor maior que ${validation.value}`
        }
      }

      return {}

    case validationType.COORDINATE: {
      const regex = new RegExp(/^-?\d{1,3}(\.\d{0,15})?$/, 'gm')

      if (!regex.test(value)) {
        return {
          hasError: true,
          message: 'Digite uma coordenada válida, máx 15 decimais'
        }
      }

      return {}
    }

    default:
      return {}
  }
}

export const validateForm = (value, validations) => {
  for (let i = 0; i < validations.length; i++) {
    const error = formValidations(value, validations[i])

    if (!isEmpty(error)) {
      return error
    }
  }

  return {}
}
