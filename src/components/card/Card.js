import React from 'react'
import './card.css'

const Card = props => {
  return (
    <div className="card text-white custom-shadow" style={{maxWidth: '18rem'}}>
      <div className="card-body">
        <h3 className="card-title text-center">{props.body}</h3>
        <p className="card-text text-center">{props.title}</p>
      </div>
    </div>
  )
}

export default Card