import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from '../../components/Organism/Form'
import { Heatmap } from '../../components/Organism/Heatmap'
import { LinkButton } from '../../components/Atom/LinkButton'
import { postResidenceAPI } from '../../api/residency'
import {
  getResidencyAction,
  selectAllResidency,
  selectResidencyError
} from '../../redux/Residency'
import { formData } from './formHelper'
import { TypeMessage } from '../../components/Atom/TypeMessage'
import './HeatmapPage.scss'

const HeatmapPage = () => {
  const [showForm, setShowForm] = useState(false)
  const [isPortTab, setIsPortTab] = useState(window.innerWidth <= 900)
  const dispatch = useDispatch()
  const residency = useSelector(selectAllResidency)
  const residencyError = useSelector(selectResidencyError)

  const getResidency = useCallback(() => dispatch(getResidencyAction()), [
    dispatch
  ])
  useEffect(() => {
    getResidency()
  }, [getResidency])

  const resize = () => {
    setIsPortTab(window.innerWidth <= 900)
  }

  const windowResize = useCallback(
    () => window.addEventListener('resize', resize),
    []
  )

  useEffect(() => {
    windowResize()
  }, [windowResize])

  const toggleShowForm = () => {
    setShowForm(!showForm)
  }

  const renderForm = () => {
    if ((isPortTab && showForm) || !isPortTab) {
      return (
        <Form
          title="Cadastrar nova residencia"
          formData={formData}
          postAPI={postResidenceAPI}
          onSuccess={getResidency}
          className="page-heatmap__form"
        />
      )
    }
  }

  return (
    <main className="page page-heatmap">
      <h1 className="page-heatmap__title">Mapa de Calor</h1>
      {residencyError !== '' && (
        <TypeMessage
          className="page-heatmap__message"
          type="error"
          text={residencyError}
        />
      )}
      <div className="page-heatmap__container">
        <section className="page-heatmap__section page-heatmap__section--form">
          {isPortTab && (
            <LinkButton
              className="page-heatmap__form-button"
              href="/#submit"
              handleClick={toggleShowForm}
              text={showForm ? 'Esconder Formulário' : 'Adicionar Dados'}
            />
          )}
          {renderForm()}
        </section>
        <section className="page-heatmap__section page-heatmap__section--map">
          <Heatmap data={residency} heightAttribute="residents" />
        </section>
      </div>
    </main>
  )
}

export default HeatmapPage
