class Api::V1::ReviewsController < ApplicationController

  def index
    render json: Review.all
  end

  def create
    review = Review.new(
      user: current_user,
      coffeeshop_id: params["coffeeshop_id"],
      rating: params["rating"],
      body: params["body"]
    )

    if review.save
        render json: review
    else
        render json: { error: review.errors.full_messages }, status: :unprocessable_entity
    end
  end
end 
