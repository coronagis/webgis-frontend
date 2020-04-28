import React from 'react'
import Map from './components/map/Map'
import Sidebar from './components/sidebar/Sidebar'
import Card from './components/card/Card'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="main">
      <Sidebar />      
      <div className="content-wrapper">
        <div className="cards-wrapper">
          <Card title={'SUSPEITOS'} body={400}/>
          <Card title={'CONFIRMADOS'} body={100}/>
          <Card title={'MORTOS'} body={65}/>
        </div>
        <div className="custom-shadow m-2"> 
          <Map/>  
        </div>
        
      </div>
    </div>
  )
}

export default App
