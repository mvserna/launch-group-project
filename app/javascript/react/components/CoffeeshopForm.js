import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import _ from 'lodash'
import Dropzone from "react-dropzone"

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
    description: "",
    image: ""
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
    let formDataBody = new FormData(document.getElementsByTagName("form")[0])
    formDataBody.append("image", coffeeFormData.image)
    if (validateForm()){
      try{
        const response = await fetch("/api/v1/coffeeshops", {
          credentials: "same-origin",
          method: "POST",
          body: formDataBody
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
      description: "",
      image: ""
    })
  }

  const handleFileUpload = (acceptedFiles) => {
    setCoffeeFormData({
      ...coffeeFormData,
      image: acceptedFiles[0]
    })
  }

  if (redirect) {
    return <Redirect to='/' />
  }

  return(
    <div className="form-container">
      <h1>Add a New Coffee Shop</h1>
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset">
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

          <Dropzone onDrop={handleFileUpload}>
            {({getRootProps, getInputProps}) => (
              <section>
                <div {...getRootProps()}>
                  <label>Image:
                    <input {...getInputProps()} />
                    <p className="callout">Drag 'n' drop some files here, or click to select files</p>
                  </label>
                </div>
              </section>
            )}
          </Dropzone>
        </fieldset>
        <div className="button-group">
          <input className ="button" name="submit" type="submit" value="Add Shop"/>
          <button className ="button" onClick={clearForm}>Clear</button>
        </div>
      </form>
    </div>
  )
}

export default CoffeeshopForm
