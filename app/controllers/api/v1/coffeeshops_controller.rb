class Api::V1::CoffeeshopsController < ApplicationController
    def index
        render json: Coffeeshop.all
    end

    def show
        render json: Coffeeshop.find(params[:id])
    end
end