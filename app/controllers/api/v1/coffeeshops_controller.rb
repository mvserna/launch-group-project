class Api::V1::CoffeeshopsController < ApplicationController
    def index
        render json: Coffeeshop.all
    end
end