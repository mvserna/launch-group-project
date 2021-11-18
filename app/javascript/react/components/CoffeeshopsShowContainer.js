import React, { useState, useEffect } from "react"
import ReviewTile from "./ReviewTile.js"

const CoffeeshopsShowContainer = (props) => {
  const [coffeeshop, setCoffeeshop] = useState({
  name: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  description: "",
  reviews: []
  })

  const fetchCoffeeshop = async () => {
  try {
    const response = await fetch(`/api/v1/coffeeshops/${props.match.params.id}/`)
    if(!response.ok) {
    const errorMessage = `${response.status}: ${response.statusText}`
    const error = new Error(errorMessage)
    throw(error)
    }
    const body = await response.json()
    setCoffeeshop(body.coffeeshop)
  } catch (err) {
    console.error(`Error in fetch: ${err.message}`)
  }
  }

  useEffect( () => {
  fetchCoffeeshop()
  }, [])

  let reviewsComponents

  if (coffeeshop.reviews !== []) {
  reviewsComponents = coffeeshop.reviews.map( (review) => {
    return (
    <ReviewTile key={review.id} review={review} />
    )
  })
  }

  return (
  <div>
    <div className="show-title">
    <h3>{coffeeshop.name}</h3>
    </div>
    <div className="show-address">
    <div>
      {coffeeshop.address}
    </div>
    {`${coffeeshop.city}, ${coffeeshop.state} ${coffeeshop.zip}`}
    </div>
    <div className="show-description">
    Description: {coffeeshop.description}
    </div>
    <div>
    <h4>Reviews</h4>
    {reviewsComponents}
    </div>
  </div>
  )
}

export default CoffeeshopsShowContainer