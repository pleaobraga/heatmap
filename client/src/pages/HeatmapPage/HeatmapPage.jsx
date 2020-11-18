import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from '../../components/Form'
import { Heatmap } from '../../components/Heatmap'
import { postResidenceAPI } from '../../api/residency'
import { getResidencyAction, selectAllResidency } from '../../redux/Residency'
import { formData } from './formHelper'
import './HeatmapPage.scss'

const HeatmapPage = () => {
  const dispatch = useDispatch()
  const residency = useSelector(selectAllResidency)

  const getResidency = useCallback(() => dispatch(getResidencyAction()), [
    dispatch
  ])

  useEffect(() => {
    getResidency()
  }, [getResidency])

  return (
    <main className="page page-heatmap">
      <section className="page-heatmap__section page-heatmap__section--form">
        <h1 className="page-heatmap__title">Mapa de Calor</h1>
        <Form
          formData={formData}
          postAPI={postResidenceAPI}
          onSuccess={getResidency}
          className="page-heatmap__form"
        />
      </section>
      <section className="page-heatmap__section page-heatmap__section--map">
        <Heatmap data={residency} heightAttribute="residents" />
      </section>
    </main>
  )
}

export default HeatmapPage
