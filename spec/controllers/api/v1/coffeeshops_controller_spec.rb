require 'rails_helper'
require 'pry'

RSpec.describe Api::V1::CoffeeshopsController, type: :controller do
  describe "POST#create" do
    context "when a POST request with correct params is made"

    post_json = {
      coffeeshop: {
        name: "Caffe Nero",
        address: "1 Center Plz Suite 101",
        city: "Boston",
        state: "MA",
        zip: "02215"
      }
    }

    it "adds a coffeeshop to the current coffeeshop database" do
      prev_count = Coffeeshop.count
      post(:create, params: post_json, format: :json)
      expect(Coffeeshop.count).to eq(prev_count + 1)
    end

    it "returns the new coffeeshop as json" do
      post(:create, params: post_json, format: :json)
      returned_json = JSON.parse(response.body)["coffeeshop"]

      expect(response.content_type).to eq("application/json; charset=utf-8")
      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json["name"]).to eq "Caffe Nero"
      expect(returned_json["address"]).to eq "1 Center Plz Suite 101"
      expect(returned_json["city"]).to eq "Boston"
      expect(returned_json["state"]).to eq "MA"
      expect(returned_json["zip"]).to eq "02215"
    end

    context "when a bad form/request is made" do
      let!(:bad_coffee) {{
        coffeeshop: {name: ""}
      }}

      it "should not save to the database" do
        prev_count = Coffeeshop.count

        post(:create, params: bad_coffee, format: :json)

        new_count = Coffeeshop.count
        expect(prev_count).to eq (new_count)
      end

      it "should return an error message" do
        post(:create, params: bad_coffee, format: :json)

        returned_json = JSON.parse(response.body)
        
        expect(returned_json["error"]).to eq(["Name can't be blank", "Address can't be blank", "City can't be blank", "State can't be blank", "Zip can't be blank"])
      end

    end
  end
end