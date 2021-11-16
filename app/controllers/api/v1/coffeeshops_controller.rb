class Api::V1::CoffeeshopsController < ApplicationController
    protect_from_forgery unless: -> { request.format.json? }
    
    def index
        render json: Coffeeshop.all
    end

    def show
        render json: Coffeeshop.find(params[:id])
    end

    def new
        @coffeeshop = Coffeeshop.new
    end

    def create
        @coffeeshop = Coffeeshop.new(coffeeshop_params)

        if @coffeeshop.save
            flash[:notice] = "Coffee Shop has been added successfully"
            redirect_to root_path
        else
            flash.now[:error] = @coffeeshop.errors.full_messages.to_sentence
            render new_coffeeshop_path
        end
    end

    def coffeeshop_params 
        params.require(:coffeeshop).permit(:name, :address, :city, :state, :zip, :description)
    end
end 