import React, { useState } from 'react'
import { map, reduce, forIn, isEmpty } from 'lodash'
import { InputField } from '../InputField'
import { postResidenceAPI } from '../../api/residency'
import { validateFormField, hasFormError } from '../../utils/formValidation'

const Form = ({ formData, postAPI }) => {
  const [formValues, setFormValues] = useState(formData)

  const getFormValues = () => {
    return reduce(
      formValues,
      (result, { value }, key) => {
        result[key] = value
        return result
      },
      {}
    )
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (hasFormError(formValues, setFormValues)) {
      return
    }

    const data = getFormValues()
  }

  const onChange = (e) => {
    e.preventDefault()

    const { name, value } = e.target
    debugger

    const error = validateFormField(value, formValues[name].validations)

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
