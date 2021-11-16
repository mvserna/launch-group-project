require 'rails_helper'

RSpec.describe Api::V1::ReviewsController, type: :controller do
  let!(:starbucks) { Coffeeshop.create!(
    name: "Starbucks", 
    address: "12 Winter Pl", 
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
    body: "This is a test review of a coffeeshop. I love Dunkin Donuts said John Cena.",
    rating: 5,
    user: cena,
    coffeeshop: starbucks
  )}
  
  let!(:vote) { Vote.create(
    user: cena,
    review: review,
    upvotes: 1,
    downvotes: 0
  )}
  
  describe "GET#index" do
    it "should display the reviews for a sepcific coffeeshop" do
      sign_in(cena)
      get :index, params: {coffeeshop_id: starbucks.id}
      returned_json = JSON.parse(response.body)
      first_review = returned_json["reviews"][0]

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json; charset=utf-8")
      
      expect(first_review["body"]).to eq review.body
      expect(first_review["rating"]).to eq 5
      expect(first_review["name"]).to eq "John"
      expect(first_review["upvotes"]).to eq 1
      expect(first_review["downvotes"]).to eq 0
      expect(first_review["user_already_voted"]).to eq true
    end
  end
end