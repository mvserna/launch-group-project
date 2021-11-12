class HomesController < ApplicationController
    def index
        redirect_to coffeeshops_path
    end
end