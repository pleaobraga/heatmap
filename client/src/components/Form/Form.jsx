import React, { useState } from 'react'
import { map, reduce } from 'lodash'
import { InputField } from '../InputField'
import { validateFormField, hasFormError } from '../../utils/formValidation'

const Form = ({ formData, postAPI, onSuccess }) => {
  const [formValues, setFormValues] = useState(formData)
  const [isPosting, setIsPosting] = useState(false)
  const [postMessage, setPostMessage] = useState({ type: '', value: '' })

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
    setPostMessage({ ...postMessage, value: '' })

    if (hasFormError(formValues, setFormValues)) {
      return
    }

    const data = getFormValues()

    setIsPosting(true)

    postAPI(data)
      .then(() => {
        setPostMessage({ type: 'success', value: 'Dados salvos com sucesso' })
        setIsPosting(false)
        onSuccess()
      })
      .catch(() => {
        setPostMessage({
          type: 'error',
          value: 'Houve um erro ao salvar os dados '
        })
        setIsPosting(false)
      })
  }

  const onChange = (e) => {
    e.preventDefault()

    const { name, value } = e.target

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
    <form className="form" onSubmit={onSubmit}>
      <h2 className="form__title">Cadastrar nova residencia</h2>
      <div className="form__fields">
        {map(formValues, (value, key) => (
          <InputField key={key} {...value} onChange={onChange} />
        ))}
      </div>
      <button className="form__submit-btn" disabled={isPosting} type="submit">
        submit
      </button>
      {postMessage.value !== '' && (
        <p className={`form__${postMessage.type}-msg`}>{postMessage.value}</p>
      )}
    </form>
  )
}

Form.defaulProps = {
  formData: {}
}

export default Form
