import React from 'react'
import { Link } from 'react-router-dom'

const CoffeeshopTile = (props) => {
  return(
    <Link className="index tile link" to={`/coffeeshops/${props.id}`}>
      <div className="index tile grid-container" >
        <div className="grid-x grid-margin-x">
          <div className="cell small-5">
            <h4>
                {props.name}
            </h4>
          </div>
          <div className="cell small-6">
            <p>{ props.address }</p>
            <p>{ props.city }, {props.state} { props.zip }</p>  
          </div>
          <div className="cell small-1 arrow">
            →
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CoffeeshopTile