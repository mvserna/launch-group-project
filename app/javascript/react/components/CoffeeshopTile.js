import React from 'react'
import { Link } from 'react-router-dom'

const CoffeeshopTile = (props) => {
  return(
    <div className="index tile grid-container" >
      <div className="grid-x grid-margin-x">
        <div className="cell small-5">
          <h4>
           <Link id="index-tile-name" to={`/coffeeshops/${props.id}`}>
              {props.name}
            </Link>
          </h4>
        </div>
        <div className="cell small-6">
          <p>{ props.address }</p>
          <p>{ props.city }, {props.state} { props.zip }</p>  
        </div>
        <div className="cell small-1">
          →
        </div>
      </div>
    </div>
  )
}

export default CoffeeshopTile