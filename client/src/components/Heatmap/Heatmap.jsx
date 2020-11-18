/* eslint-disable no-undef */
import React from 'react'
import {
  GoogleMap,
  useJsApiLoader,
  HeatmapLayer,
  InfoBox
} from '@react-google-maps/api'

function Heatmap() {
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

  const onCLick = (e) => {
    console.log(e)
  }

  const InfoBoxOptions = { closeBoxURL: '', enableEventPropagation: true }

  const renderMap = () => {
    return (
      <GoogleMap
        id="heatmap-layer"
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
        onClick={onCLick}
      >
        <HeatmapLayer
          data={[
            new google.maps.LatLng(37.782, -122.447),
            new google.maps.LatLng(37.782, -122.445),
            new google.maps.LatLng(37.782, -122.443),
            new google.maps.LatLng(37.782, -122.441),
            new google.maps.LatLng(37.782, -122.439),
            new google.maps.LatLng(37.782, -122.437),
            new google.maps.LatLng(37.782, -122.435),
            new google.maps.LatLng(37.785, -122.447),
            new google.maps.LatLng(37.785, -122.445),
            new google.maps.LatLng(37.785, -122.443),
            new google.maps.LatLng(37.785, -122.441),
            new google.maps.LatLng(37.785, -122.439),
            new google.maps.LatLng(37.785, -122.437),
            new google.maps.LatLng(37.785, -122.435)
          ]}
        />
      </GoogleMap>
    )
  }

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  return isLoaded ? renderMap() : <div>Carregando</div>
}

export default Heatmap
