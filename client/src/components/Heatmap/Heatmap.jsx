/* eslint-disable no-undef */
import React from 'react'
import { GoogleMap, useJsApiLoader, HeatmapLayer } from '@react-google-maps/api'

const Heatmap = ({ data, heightAttribute }) => {
  const mapContainerStyle = {
    height: '400px',
    width: '800px'
  }

  const center = {
    lat: 37.774546,
    lng: -122.433523
  }

  const libs = ['places', 'visualization', 'drawing', 'geometry']

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.APP_GOOGLE_API_KEY,
    libraries: libs
  })

  const renderMap = () => {
    const heatmapData = data.map((a) => {
      return {
        location: new google.maps.LatLng(a.lat, a.lng),
        weight: a[heightAttribute]
      }
    })

    return (
      <GoogleMap
        id="heatmap-layer"
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
      >
        <HeatmapLayer options={{ radius: 15 }} data={heatmapData} />
      </GoogleMap>
    )
  }

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  return isLoaded ? renderMap() : <div>Carregando</div>
}

export default Heatmap
