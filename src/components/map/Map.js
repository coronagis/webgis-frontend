import React, {
  useEffect
} from 'react'
import L from 'leaflet'
import SC from '../../assets/SC_cities.json'
import 'leaflet/dist/leaflet.css'
import './map.css'

const Map = props => {
  const position = [
    [-29.740928198672176, -54.122542017611146],
    [-25.56243002346398, -48.047698817660546]
  ]

  useEffect(() => {
    const resize = () => {
      let width = window.innerWidth
      if (width > 1024) {
        map.setZoom(8)
      }
      if (width < 1024 && width > 768) {
        map.setZoom(7)
      }
      if (width < 540) {
        map.setZoom(6)
      }
    }

    function getColor(d) {
      return d > 85 ? '#800026' :
        d > 58 ? '#bd0026' :
        d > 35 ? '#e31a1c' :
        d > 21 ? '#fc4e2a' :
        d > 14 ? '#fd8d3c' :
        d > 8 ? '#feb24c' :
        d > 3 ? '#fed976' :
        d > 0 ? '#ffeda0' :
        '#ffffcc'
    }

    const style = (feature) => {
      return {
        fillColor: getColor(feature.properties['Casos_Conf']),
        fillOpacity: 1,
        weight: 1,
        color: '#020202'
      }
    }

    const map = L.map('map', {
        zoomControl: false,
        minZoom: 4,
        maxZoom: 10,
        maxBounds: position,
      })
      .fitBounds(position)
    L.geoJSON(SC, {
      style: style
    }).addTo(map)

    resize()

    window.addEventListener("resize", resize)
  })

  return ( 
    <div className="map-wrapper" id="map" ></div>
  )
}

export default Map