import React from 'react'
import { Link } from 'react-router-dom'

const CoffeeshopTile = (props) => {
  return(
    <div className="index tile grid-container" >
      <div className="grid-x grid-margin-x">
        <h1>
         <Link to={`/coffeeshops/${props.id}`}>
            {props.name}
          </Link>
        </h1>
        <p>{ props.address }</p>
        <p>{ props.city }, {props.state} { props.zip }</p>  
      </div>
    </div>
  )
}

export default CoffeeshopTile