import React, { useState } from 'react'
import { map, reduce } from 'lodash'
import { InputField } from '../InputField'
import { validateFormField, hasFormError } from '../../utils/formValidation'
import './Form.scss'

const Form = ({ formData, postAPI, onSuccess, className }) => {
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
          value: 'Houve um erro ao salvar os dados'
        })
        setIsPosting(false)
      })
  }

  const onChange = (e) => {
    e.preventDefault()
    if (postMessage.type !== '') {
      setPostMessage({ ...postMessage, value: '' })
    }

    const { name, value, type } = e.target

    const newValue = type === 'number' ? e.target.valueAsNumber : value

    const error = validateFormField(value, formValues[name].validations)

    setFormValues({
      ...formValues,
      [name]: {
        ...formValues[name],
        value: newValue,
        error
      }
    })
  }

  return (
    <form className={`form ${className}`} onSubmit={onSubmit}>
      <h2 className="form__title">Cadastrar nova residencia</h2>
      <div className="form__fields">
        {map(formValues, (value, key) => (
          <InputField key={key} {...value} onChange={onChange} />
        ))}
      </div>
      <button
        id="submit"
        className="form__submit-btn"
        disabled={isPosting}
        type="submit"
      >
        Enviar
      </button>
      {postMessage.value !== '' && (
        <p className={`form__msg form__msg--${postMessage.type}`}>
          {postMessage.value}
        </p>
      )}
    </form>
  )
}

Form.defaulProps = {
  formData: {},
  className: ''
}

export default Form
