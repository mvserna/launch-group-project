require 'rails_helper'
require 'pry'

RSpec.describe Api::V1::ReviewsController, type: :controller do
  describe "POST#create" do
    context "when a POST request with correct params is made"
    
    let!(:dunkins) { Coffeeshop.create!(
      name: "Dunkins", 
      address: "100 Summer St", 
      city: "Boston", 
      state: "MA", 
      zip: "02108"
    )}

    let!(:cena) { User.create!(
      email: "test@test.com",
      encrypted_password: "thequickbrownfox",
      first_name: "John",
      last_name: "Cena",
      password: "thequickbrownfox"
    )}

    let!(:review) { Review.create!(
      body: "Aiiiiite cah-fee",
      rating: 3,
      user: cena,
      coffeeshop: dunkins
    )}
  
    it "signed-user adds a review to a specific coffeeshop" do
      sign_in(cena)
      post_json = {
        review: {
          rating: 3,
          body: "Aiite",
          coffeeshop_id: dunkins.id
        }
      }
      prev_count = Review.count
      post(:create, params: post_json[:review], format: :json)
      expect(Review.count).to eq(prev_count + 1)
    end

    it "returns the new review as json" do
      sign_in(cena)
      post_json = {
        review: {
          rating: 2,
          body: "Aiite",
          coffeeshop_id: dunkins.id
        }
      } 

      post(:create, params: post_json[:review], format: :json)
      returned_json = JSON.parse(response.body)["review"]

      expect(response.content_type).to eq("application/json; charset=utf-8")
      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json["rating"]).to eq 2
      expect(returned_json["body"]).to eq "Aiite"
    end
  end
end