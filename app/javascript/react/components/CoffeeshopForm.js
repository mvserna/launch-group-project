import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import _ from 'lodash'
import ErrorList from "./ErrorList"

const CoffeeshopForm = (props) => {
  const [redirect, setRedirect] = useState(false)
  const [errors, setErrors] = useState({})
  const [coffeeFormData, setCoffeeFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    description: ""
  })

  const handleChange = (event) => {
    event.preventDefault();

    setCoffeeFormData({
    ...coffeeFormData,
    [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const validateForm = () => {
    let submitErrors = {}
    if (coffeeFormData.name.trim() === "") {
      submitErrors = {
        ...submitErrors,
        name: "is blank"
      }
    }

    if (coffeeFormData.address.trim() === "") {
      submitErrors = {
        ...submitErrors,
        address: "is blank"
      }
    }

    if (coffeeFormData.city.trim() === "") {
      submitErrors = {
        ...submitErrors,
        city: "is blank"
      }
    }

    if (coffeeFormData.state.trim() === "") {
      submitErrors = {
        ...submitErrors,
        state: "is blank"
      }
    }

    if (coffeeFormData.zip.trim() === "") {
      submitErrors = {
        ...submitErrors,
        zip: "is blank"
      }
    }

    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (validateForm()){
      try{
        const response = await fetch("/api/v1/coffeeshops", {
          credentials: "same-origin",
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(coffeeFormData)
        })
        if (!response.ok) {
          throw(new Error(`${response.status}: ${response.statusText}`))
        };
        const parseShopData = await response.json()
        setCoffeeFormData({...coffeeFormData, parseShopData})
        setRedirect(true)
        
      } catch(err) {
        console.error(err)
      }
    }
  }

  const clearForm = event => {
    event.preventDefault()
    setCoffeeFormData({
      name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      description: ""
    })
  }

  if (redirect) {
    return <Redirect to='/' />
  }

  return(
    <div>
      <h1>Add a New Coffee Shop</h1>
      <form onSubmit={handleSubmit}>
        <ErrorList errors={errors} />
        <label>Name:
          <input 
            name="name"
            id="name"
            type="text"
            value={coffeeFormData.name}
            onChange={handleChange}
          />
        </label>

        <label>Address:
          <input 
            name="address" 
            id="address" 
            type="text" 
            value={coffeeFormData.address} 
            onChange={handleChange}
          />
        </label>

        <label>City:
          <input 
            name="city" 
            id="city" 
            type="text" 
            value={coffeeFormData.city} 
            onChange={handleChange}
          />
        </label>

        <label>State:        
          <input 
            name="state"
            id="state" 
            type="text" 
            value={coffeeFormData.state} 
            onChange={handleChange}/>
        </label>

        <label>Zip:
          <input 
            name="zip" 
            id="zip" 
            type="text" 
            value={coffeeFormData.zip}
            onChange={handleChange}
          />
        </label>

        <label>Description:
          <input 
            name="description" 
            id="description" 
            type="text" 
            value={coffeeFormData.description}
            onChange={handleChange}
          />
        </label>

        <input className ="button" name="submit" type="submit" value="Add Shop"/>
        <button className ="button" onClick={clearForm}>Clear</button>
      </form>
    </div>
  )
}

export default CoffeeshopForm