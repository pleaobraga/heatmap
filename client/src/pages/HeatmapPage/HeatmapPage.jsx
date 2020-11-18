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
    <main className="page page-welcome">
      <Form
        formData={formData}
        postAPI={postResidenceAPI}
        onSuccess={getResidency}
      />
      <Heatmap data={residency} heightAttribute="residents" />
    </main>
  )
}

export default HeatmapPage
