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
        it "should return a list of all coffee shops" do

            get :index
            returned_json = JSON.parse(response.body)["coffeeshops"]

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

    describe "GET#show" do
        it "should display the details of a coffeeshop" do
            get :show, params: {id: starbucks.id}
            returned_json = JSON.parse(response.body)["coffeeshop"]
    
            expect(response.status).to eq 200
            expect(response.content_type).to eq("application/json; charset=utf-8")

            expect(returned_json["name"]).to eq "Starbucks"
            expect(returned_json["address"]).to eq "12 Winter Pl"
            expect(returned_json["city"]).to eq "Boston"
            expect(returned_json["state"]).to eq "MA"
            expect(returned_json["zip"]).to eq "02108"
        end

        it "should display the reviews for a sepcific coffeeshop" do
            sign_in(cena)
            get :show, params: {id: starbucks.id}
            returned_json = JSON.parse(response.body)
            
            first_review = returned_json["coffeeshop"]["reviews"][0]

            expect(response.status).to eq 200
            expect(response.content_type).to eq("application/json; charset=utf-8")
            expect(first_review["body"]).to eq review.body
            expect(first_review["rating"]).to eq 5
            expect(first_review["name"]).to eq "John"
            expect(first_review["upvotes"]).to eq 1
            expect(first_review["downvotes"]).to eq 0
            expect(first_review["user_already_upvoted"]).to eq true
            expect(first_review["user_already_downvoted"]).to eq false
        end
    end
end

