import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Form } from '../../components/Form'
import { Heatmap } from '../../components/Heatmap'
import { getResidencyAction } from '../../redux/Residency'
import { formData } from './formHelper'
import './HeatmapPage.scss'

const WelcomePage = () => {
  const dispatch = useDispatch()

  const getResidency = useCallback(() => dispatch(getResidencyAction()), [
    dispatch
  ])

  useEffect(() => {
    getResidency()
  }, [getResidency])

  return (
    <main className="page page-welcome">
      <Form formData={formData} />
      <Heatmap />
    </main>
  )
}

export default WelcomePage
