import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'

export const MapContainer = ({ google }) => {
  const mapStyles = {
    width: '100%',
    height: '100%'
  }

  return (
    <Map
      google={google}
      zoom={14}
      style={mapStyles}
      initialCenter={{
        lat: -1.2884,
        lng: 36.8233
      }}
    />
  )
}

export default GoogleApiWrapper({
  apiKey: `${process.env.APP_GOOGLE_API_KEY}`
})(MapContainer)
