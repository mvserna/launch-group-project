import React, { useState, useEffect } from "react"

const CoffeeshopForm = (props) => {
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

  const addShop = async () => {
  try{
    const response = await fetch("/api/v1/coffeeshops", {
    credentials: "same-origin",
    method: "POST",
    body: JSON.stringify(coffeeFormData),
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
    })
    if (!response.ok) {
    throw(new Error(`${response.status}: ${response.statusText}`))
    };
    const parseShopData = await response.json()
    setCoffeeFormData({...coffeeFormData, parseShopData})
  } catch(err) {
    console.error(err)
  }
  }

  const handleSubmit = (event) => {
  event.preventDefault();
  addShop()
  setCoffeeFormData({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    description: ""
  })
  }

  return(
  <form onSubmit={handleSubmit}>
    <label>Name:
    <input 
      name="name"
      id="name"
      type="text"
      onChange={handleChange}
    />
    </label>

    <label>Address:</label>
    <input name="address" id="address" type="text" onChange={handleChange}/>

    <label>City:</label>
    <input name="city" id="city" type="text" onChange={handleChange}/>

    <label>State:</label>
    <input name="state" id="state" type="text" onChange={handleChange}/>

    <label>Zip:</label>
    <input name="zip" id="zip" type="text" onChange={handleChange}/>

    <label>Description:</label>
    <input name="description" id="description" type="text" onChange={handleChange}/>

    <input name="submit" type="submit" value="Add Shop"/>
  </form>

  )
}

export default CoffeeshopForm