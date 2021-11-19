import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import _ from 'lodash'
import ErrorList from "./ErrorList"

const ReviewForm = (props) => {
const [redirect, setRedirect] = useState(false)
const [errors, setErrors] = useState({})
const [reviewFormData, setReviewFormData] = useState({
  rating: "",
  body: "",
  coffeeshop_id: props.match.params.id
})

const handleChange = (event) => {
  event.preventDefault();
  setReviewFormData({
  ...reviewFormData,
  [event.currentTarget.name]: event.currentTarget.value
  })
}

const validateForm = () => {
  let submitErrors = {}
  if (reviewFormData.rating.trim() === "") {
    submitErrors = {
      ...submitErrors,
      rating: "is blank"
    }
  }
  setErrors(submitErrors)
  return _.isEmpty(submitErrors)
}

const handleSubmit = async (event) => {
  event.preventDefault()
  if (validateForm()){
    try{
      const response = await fetch("/api/v1/reviews", {
        credentials: "same-origin",
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(reviewFormData)
      })
      if (!response.ok) {
        throw(new Error(`${response.status}: ${response.statusText}`))
      };
      const parseFormData = await response.json()
      setReviewFormData({...reviewFormData, parseFormData})
      setRedirect(true)
      
    } catch(err) {
      console.error(err)
    }
  }
}

if (redirect) {
  return <Redirect to={`/coffeeshops/${props.match.params.id}`} />
}

  return (
    <div>
      <h1>Add a Review:</h1>
      <form onSubmit={handleSubmit}>
        <ErrorList errors={errors} />

        <label>Rating 0-5:
          <input 
            name="rating" 
            id="rating" 
            type="number" 
            onChange={handleChange}
            min="0"
            max="5"
          />
        </label>

        <label>Comment:
          <input 
            name="body" 
            id="body" 
            type="text"
            onChange={handleChange} 
          />
        </label>

        <input className ="button" name="submit" type="submit" value="Add Review"/>
      </form>
    </div>
  )
}

export default ReviewForm