import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import CoffeeshopsShowContainer from './CoffeeshopsShowContainer'

const CoffeeshopTile = (props) => {
    return(
        <div className="coffeeshop-tile">
            <h1>
                <Link to={`/coffeeshops/${props.id}`}>
                    {props.name}
                </Link>
            </h1>
            <p>{ props.address }</p>
            <p>{ props.city }, {props.state} { props.zip }</p>
            <Switch>
                <Route exact path="/coffeeshops/:id" component={CoffeeshopsShowContainer} />
            </Switch>
        </div>
    )
}

export default CoffeeshopTile