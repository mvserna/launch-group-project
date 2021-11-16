import React, { useState } from "react"

const ReviewTile = (props) => {
  const { id, body, rating, name, upvotes, downvotes, user_already_voted } = props.review
  
  const [votes, setVotes] = useState({
    upvotes: upvotes,
    downvotes: downvotes,
  })
  const [pastVote, setPastVote] = useState(user_already_voted)

  const upVoteHandler = async () => {
    let postPayload = {
      review_id: id,
      upvotes: 1,
      downvotes: 0
    }

    if (votes.upvotes == 1) {
      postPayload.upvotes = 0
    }
    setPastVote(!pastVote)

    await updateVotes(postPayload)
  }

  const downVoteHandler = async () => {
    let postPayload = {
      review_id: id,
      upvotes: 0,
      downvotes: 1
    }

    if (votes.downvotes == 1) {
      postPayload.downvotes = 0
    }
    setPastVote(!pastVote)

    await updateVotes(postPayload)
  }

  const updateVotes = async (postPayload) => {
    try {
      const response = await fetch("/api/v1/votes", {
        credentials: "same-origin",
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postPayload)
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      setVotes(postPayload)
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }
  
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
      <div onClick={upVoteHandler}>
        Upvotes: {votes.upvotes}        
      </div>
      <div onClick={downVoteHandler}>
        Downvotes: {votes.downvotes}
      </div>
    </div>
  )
}

export default ReviewTile