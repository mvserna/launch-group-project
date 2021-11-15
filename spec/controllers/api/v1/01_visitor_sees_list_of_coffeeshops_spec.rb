require 'rails_helper'

RSpec.describe Api::V1::CoffeeshopsController, type: :controller do
    let!(:starbucks) { Coffeeshop.create!(
        name: "Starbucks", 
        address: "12 Winter Pl", 
        city: "Boston", 
        state: "MA", 
        zip: "02108"
    )}

    let!(:dunkins) { Coffeeshop.create!(
        name: "Dunkins", 
        address: "100 Summer St", 
        city: "Boston", 
        state: "MA", 
        zip: "02108"
    )}

    describe "GET#index" do 
        it "should return a list of all coffee shops" do

            get :index
            returned_json = JSON.parse(response.body)

            expect(response.status).to eq 200
            expect(response.content_type).to eq("application/json; charset=utf-8")

            expect(returned_json[0]["name"]).to eq "Starbucks"
            expect(returned_json[0]["address"]).to eq "12 Winter Pl"
            expect(returned_json[0]["city"]).to eq "Boston"
            expect(returned_json[0]["state"]).to eq "MA"
            expect(returned_json[0]["zip"]).to eq "02108"

            expect(returned_json[1]["name"]).to eq "Dunkins"
            expect(returned_json[1]["address"]).to eq "100 Summer St"
            expect(returned_json[1]["city"]).to eq "Boston"
            expect(returned_json[1]["state"]).to eq "MA"
            expect(returned_json[1]["zip"]).to eq "02108"
        end
    end
end

