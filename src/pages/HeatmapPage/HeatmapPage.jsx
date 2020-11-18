import React from 'react'
import { Form } from '../../components/Form'
import { validationType } from '../../utils/formValidation'
import './WelcomePage.scss'

const WelcomePage = () => {
  const formData = {
    cep: {
      name: 'cep',
      label: 'CEP',
      value: '',
      type: 'text',
      validations: [
        { name: validationType.REQUIRED },
        { name: validationType.NUMBER }
      ],
      error: {}
    },
    number: {
      name: 'number',
      label: 'Número',
      value: '',
      type: 'number',
      validations: [validationType.REQUIRED],
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
      type: 'text',
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

  return (
    <main className="page page-welcome">
      <Form formData={formData} />
    </main>
  )
}

export default WelcomePage
