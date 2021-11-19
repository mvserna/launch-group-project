class Api::V1::VotesController < ApplicationController
  def create
    vote = Vote.new(
      user: current_user,
      review_id: params["review_id"],
      upvotes: params["upvotes"],
      downvotes: params["downvotes"]
    )
    
    previous_vote = Vote.find_by(user: current_user, review_id: params["review_id"])
    if previous_vote
      previous_vote.upvotes = params["upvotes"]
      previous_vote.downvotes = params["downvotes"]
      previous_vote.save!
    else
      vote.save!
    end
  end
end