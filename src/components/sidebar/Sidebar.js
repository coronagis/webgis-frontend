import React from 'react'
import logo from '../../assets/logo.svg'
import './sidebar.css'


const Sidebar = props => {
  return (
    <div className="sidebar shadow">
      <img className="logo" src={logo} />
      
    </div>
  )
}

export default Sidebar