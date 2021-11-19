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

Coffeeshop.create!(
  name: "CuppaCoffee", 
  address: "1 Merrimac", 
  city: "Boston", 
  state: "MA", 
  zip: "02108"
)

Coffeeshop.create!(
  name: "George Howell Coffee", 
  address: "100 Hanover St", 
  city: "Boston", 
  state: "MA", 
  zip: "02108"
)

Coffeeshop.create!(
  name: "Ogawa Coffee", 
  address: "10 Milk St", 
  city: "Boston", 
  state: "MA", 
  zip: "02108"
)

Coffeeshop.create!(
  name: "Recreo Coffee", 
  address: "1 City Hall Square", 
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
  body: "Nothing like a cup of Dunkin Donuts.",
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
  body: "Great shop but I wish it had later hours since it closes at 1pm.",
  rating: 4
)

another_review.coffeeshop = starbucks
another_review.user = User.first
another_review.save!