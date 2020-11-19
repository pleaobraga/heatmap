import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DynamicImport from './components/DynamicImport'
import ErrorPage from './pages/ErrorPage'
import { Loading } from './components/Loading'

const HeatmapPage = () => (
  <DynamicImport
    loadComponent={() =>
      import(/*  webpackChunkName: "heatmapPage" */ './pages/HeatmapPage')
    }
    ErrorComponent={ErrorPage}
    LoadingComponent={() => <Loading />}
  />
)

const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<ErrorPage />}>
        <Switch>
          <Route exact path="/" component={HeatmapPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default Routes
