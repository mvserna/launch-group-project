import React from "react"

const ReviewTile = (props) => {
  const { body, rating, name } = props.review

  return (
    <div>
      <div>
        {body}
      </div>
      <div>
        Posted by {name}
      </div>
      <div>
        Rating: {rating}/5
      </div>
    </div>
  )
}

export default ReviewTile