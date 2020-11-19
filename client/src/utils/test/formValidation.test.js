import {
  validationType,
  formValidations,
  validateFormField
} from '../formValidation'

describe('formValifdations', () => {
  describe('formValidations', () => {
    describe('REQUIRED', () => {
      const error = { hasError: true, message: 'Campo obrigatório' }

      const testCase = [
        {
          input: {
            value: '',
            validation: {
              name: validationType.REQUIRED
            }
          },
          output: error
        },
        {
          input: {
            value: null,
            validation: {
              name: validationType.REQUIRED
            }
          },
          output: error
        },
        {
          input: {
            value: undefined,
            validation: {
              name: validationType.REQUIRED
            }
          },
          output: error
        },
        {
          input: {
            value: 'test',
            validation: {
              name: validationType.REQUIRED
            }
          },
          output: {}
        }
      ]

      testCase.forEach(({ input, output }) => {
        it(`should handle ${input.value}`, () => {
          expect(formValidations(input.value, input.validation)).toEqual(output)
        })
      })
    })

    describe('MAX', () => {
      const error = (value) => ({
        hasError: true,
        message: `Digite um valor menor que ${value}`
      })

      const testCase = [
        {
          input: {
            value: 212,
            validation: {
              name: validationType.MAX,
              value: 50
            }
          },
          output: error(50)
        },
        {
          input: {
            value: 212,
            validation: {
              name: validationType.MAX,
              value: 40
            }
          },
          output: error(40)
        },
        {
          input: {
            value: 212,
            validation: {
              name: validationType.MAX,
              value: 212
            }
          },
          output: {}
        },
        {
          input: {
            value: 90,
            validation: {
              name: validationType.MAX,
              value: 100
            }
          },
          output: {}
        }
      ]

      testCase.forEach(({ input, output }) => {
        it(`should handle ${input.value}`, () => {
          expect(formValidations(input.value, input.validation)).toEqual(output)
        })
      })
    })

    describe('MIN', () => {
      const error = (value) => ({
        hasError: true,
        message: `Digite um valor maior que ${value}`
      })

      const testCase = [
        {
          input: {
            value: 30,
            validation: {
              name: validationType.MIN,
              value: 50
            }
          },
          output: error(50)
        },
        {
          input: {
            value: 30,
            validation: {
              name: validationType.MIN,
              value: 40
            }
          },
          output: error(40)
        },
        {
          input: {
            value: 30,
            validation: {
              name: validationType.MIN,
              value: 30
            }
          },
          output: {}
        },
        {
          input: {
            value: 100,
            validation: {
              name: validationType.MIN,
              value: 90
            }
          },
          output: {}
        }
      ]

      testCase.forEach(({ input, output }) => {
        it(`should handle ${input.value}`, () => {
          expect(formValidations(input.value, input.validation)).toEqual(output)
        })
      })
    })

    describe('COORDINATE', () => {
      const error = {
        hasError: true,
        message: 'Digite uma coordenada válida, máx 15 decimais'
      }

      const testCase = [
        {
          input: {
            value: 'gsd',
            validation: {
              name: validationType.COORDINATE
            }
          },
          output: error
        },
        {
          input: {
            value: 3.3333333333333333,
            validation: {
              name: validationType.COORDINATE
            }
          },
          output: error
        },
        {
          input: {
            value: -12,
            validation: {
              name: validationType.COORDINATE
            }
          },
          output: {}
        },
        {
          input: {
            value: 3.333333333333333,
            validation: {
              name: validationType.COORDINATE
            }
          },
          output: {}
        }
      ]

      testCase.forEach(({ input, output }) => {
        it(`should handle ${input.value}`, () => {
          expect(formValidations(input.value, input.validation)).toEqual(output)
        })
      })
    })
  })

  describe('validateFormField', () => {
    it('should hanle a error case', () => {
      const error = { hasError: true, message: 'Campo obrigatório' }
      const validations = [
        {
          name: validationType.REQUIRED
        }
      ]

      expect(validateFormField('', validations)).toEqual(error)
    })

    it('should hanle a error case', () => {
      const validations = [
        {
          name: validationType.REQUIRED
        }
      ]

      expect(validateFormField('res', validations)).toEqual({})
    })
  })
})
