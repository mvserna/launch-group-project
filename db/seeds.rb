# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

starbucks = Coffeeshop.create!(
  name: "Starbucks", 
  address: "12 Winter Pl", 
  city: "Boston", 
  state: "MA", 
  zip: "02108"
)

dunkins = Coffeeshop.create!(
  name: "Dunkins", 
  address: "100 Summer St", 
  city: "Boston", 
  state: "MA", 
  zip: "02108"
)

cena = User.create!(
  email: "test@test.com",
  encrypted_password: "thequickbrownfox",
  first_name: "John",
  last_name: "Cena",
  password: "thequickbrownfox"
)

review = Review.new(
  body: "This is a test review of a coffeeshop. I love Dunkin Donuts said John Cena.",
  rating: 5
)

review.coffeeshop = dunkins
review.user = User.first
review.save!

vote = Vote.new(
  user: User.first,
  review: Review.first,
  upvotes: 0,
  downvotes: 0
)

vote.save!

another_review = Review.new(
  body: "This is a test review of a coffeeshop. I like Starbucks said John Cena.",
  rating: 4
)

another_review.coffeeshop = starbucks
another_review.user = User.first
another_review.save!