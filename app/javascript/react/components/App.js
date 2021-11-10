import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import CoffeeshopsPage from './CoffeeshopsPage'

export const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/coffeeshops" component={CoffeeshopsPage} />
      </BrowserRouter>
    </div>
  )
}

export default App
