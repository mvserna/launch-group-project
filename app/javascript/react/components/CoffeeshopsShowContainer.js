import React, { useState, useEffect } from "react"

const CoffeeshopsShowContainer = (props) => {
  const [coffeeshop, setCoffeeshop] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    description: ""
  })

  const fetchCoffeeshop = async () => {
    const response = await fetch(`/api/v1/coffeeshops/${props.match.params.id}`)
    const body = await response.json()
    setCoffeeshop(body)
  }

  useEffect( () => {
    fetchCoffeeshop()
  }, [])

  return (
    <div>
      <div className="show-title">
        {coffeeshop.name}
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
    </div>
  )
}

export default CoffeeshopsShowContainer