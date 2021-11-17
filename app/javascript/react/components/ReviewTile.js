import React, { useState } from "react"

const ReviewTile = (props) => {
  const { id, body, rating, name, upvotes, downvotes, user_already_upvoted, user_already_downvoted } = props.review
  
  const [votes, setVotes] = useState({
    upvotes: upvotes,
    downvotes: downvotes,
  })
  const [pastVote, setPastVote] = useState({
    upvoted: user_already_upvoted,
    downvoted: user_already_downvoted
  })

  const voteHandler = async (event) => {
    const current_vote = event.currentTarget.innerText.slice(0,1)
    let new_upvotes_total
    let new_downvotes_total
    let postPayload = {
      review_id: id,
      upvotes: 0,
      downvotes: 0
    }
    
    if (pastVote.upvoted && current_vote === "U") {
      new_upvotes_total = votes.upvotes - 1
      setPastVote({...pastVote, upvoted: false})
    } else if (pastVote.upvoted && current_vote === "D") {
      new_upvotes_total = votes.upvotes - 1
      new_downvotes_total = votes.downvotes + 1
      setPastVote({upvoted: false, downvoted: true})
      postPayload.downvotes = 1
    } else if (pastVote.downvoted && current_vote === "U") {
      new_upvotes_total = votes.upvotes + 1
      new_downvotes_total = votes.downvotes - 1
      setPastVote({upvoted: true, downvoted: false})
      postPayload.upvotes = 1
    } else if (pastVote.downvoted && current_vote === "D") {
      new_downvotes_total = votes.downvotes - 1
      setPastVote({...pastVote, downvoted: false})
    } else if (current_vote === "U") {
      new_upvotes_total = votes.upvotes + 1
      setPastVote({upvoted: true, downvoted: false})
      postPayload.upvotes = 1
    } else if (current_vote === "D") {
      new_downvotes_total = votes.downvotes + 1
      setPastVote({upvoted: false, downvoted: true})
      postPayload.downvotes = 1
    }
    
    setVotes({upvotes: new_upvotes_total, downvotes: new_downvotes_total})
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
      <div onClick={voteHandler}>
        Upvotes: {votes.upvotes}        
      </div>
      <div onClick={voteHandler}>
        Downvotes: {votes.downvotes}
      </div>
    </div>
  )
}

export default ReviewTile