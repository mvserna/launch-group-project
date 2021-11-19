import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CoffeeshopsPage from './CoffeeshopsPage'
import CoffeeshopsShowContainer from './CoffeeshopsShowContainer'
import CoffeeshopForm from './CoffeeshopForm'
import ReviewForm from './ReviewForm'
import AboutUs from './AboutUs'

export const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={CoffeeshopsPage} />
          <Route exact path="/coffeeshops" component={CoffeeshopsPage} />
          <Route exact path="/coffeeshops/about-us" component={AboutUs} />
          <Route exact path="/coffeeshops/new" component={CoffeeshopForm} />
          <Route exact path="/coffeeshops/:id" component={CoffeeshopsShowContainer} />
          <Route exact path="/coffeeshops/:id/reviews/new" component={ReviewForm} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
