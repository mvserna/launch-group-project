require 'rails_helper'

RSpec.describe Api::V1::CoffeeshopsController, type: :controller do
  let!(:starbucks) { Coffeeshop.create!(
    name: "Starbucks", 
    address: "12 Winter Pl", 
    city: "Boston", 
    state: "MA", 
    zip: "02108"
  )}

  describe "GET#show" do
    it "should display the details of a coffeeshop" do
      get :show, params: {id: starbucks.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json; charset=utf-8")

      expect(returned_json["name"]).to eq "Starbucks"
      expect(returned_json["address"]).to eq "12 Winter Pl"
      expect(returned_json["city"]).to eq "Boston"
      expect(returned_json["state"]).to eq "MA"
      expect(returned_json["zip"]).to eq "02108"
    end
  end
end
