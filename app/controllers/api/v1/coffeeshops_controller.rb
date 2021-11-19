class Api::V1::CoffeeshopsController < ApplicationController
  def index
    render json: Coffeeshop.all
  end

  def show
    render json: Coffeeshop.find(params[:id])
  end

  def create
    coffeeshop = Coffeeshop.new({
      name: params[:name],
      address: params[:address],
      city: params[:city],
      state: params[:state],
      zip: params[:zip],
      description: params[:description],
      image: params[:image]
    })

    if coffeeshop.save
      render json: coffeeshop
    else
      render json: { error: coffeeshop.errors.full_messages }, status: :unprocessable_entity
    end
  end
end
