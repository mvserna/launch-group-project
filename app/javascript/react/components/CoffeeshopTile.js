import React from 'react'

const CoffeeshopTile = (props) => {
    return(
        <div className="coffeeshop-tile">
            <h1>{ props.name }</h1>
            <p>{ props.address }</p>
            <p>{ props.city }, {props.state} { props.zip }</p>
        </div>
    )
}

export default CoffeeshopTile