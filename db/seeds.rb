# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Coffeeshop.create!(
  name: "Starbucks", 
  address: "12 Winter Pl", 
  city: "Boston", 
  state: "MA", 
  zip: "02108"
)

Coffeeshop.create!(
  name: "Dunkins", 
  address: "100 Summer St", 
  city: "Boston", 
  state: "MA", 
  zip: "02108"
)