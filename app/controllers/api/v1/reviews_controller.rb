class Api::V1::ReviewsController < ApplicationController
  def index
    render json: Review.where(coffeeshop_id: params["coffeeshop_id"])
  end
end