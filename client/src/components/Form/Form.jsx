import React, { useState } from 'react'
import { map } from 'lodash'
import { InputField } from '../InputField'
import { validateForm } from '../../utils/formValidation'

const Form = ({ formData }) => {
  const [formValues, setFormValues] = useState(formData)

  const onSubmit = (e) => {
    e.preventDefault()
  }

  const onChange = (e) => {
    e.preventDefault()

    const { name, value } = e.target

    const error = validateForm(value, formValues[name].validations)

    setFormValues({
      ...formValues,
      [name]: {
        ...formValues[name],
        value,
        error
      }
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <h2>Form Title</h2>
      <div>
        {map(formValues, (value, key) => (
          <InputField key={key} {...value} onChange={onChange} />
        ))}
      </div>
      <button type="submit">submit</button>
    </form>
  )
}

Form.defaulProps = {
  formData: {}
}

export default Form
