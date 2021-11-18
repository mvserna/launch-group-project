class Api::V1::CoffeeshopsController < ApplicationController

  def index
    render json: Coffeeshop.all
  end

  def show
    render json: Coffeeshop.find(params[:id])
  end

  def create
    coffeeshop = Coffeeshop.new(coffeeshop_params)

    if coffeeshop.save
        render json: coffeeshop
    else
        render json: { error: coffeeshop.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private
  def coffeeshop_params 
    params.require(:coffeeshop).permit(:name, :address, :city, :state, :zip, :description)
  end
end 