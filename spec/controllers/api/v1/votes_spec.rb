require 'rails_helper'

RSpec.describe Api::V1::VotesController, type: :controller do
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
  
  describe "POST#create" do
    it "should post an upvote or downvote for a specific review on a coffeeshop" do
      sign_in(cena)
      post :create, params: {review_id: Review.first.id, upvotes: 0, downvotes: 1}
      expect(response.status).to eq 204
      
      updated_vote = Vote.first
      
      expect(updated_vote["review_id"]).to eq Review.first.id
      expect(updated_vote["user_id"]).to eq cena.id
      expect(updated_vote["upvotes"]).to eq 0
      expect(updated_vote["downvotes"]).to eq 1
    end
  end
end