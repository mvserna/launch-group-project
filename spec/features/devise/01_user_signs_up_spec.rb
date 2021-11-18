require 'rails_helper'

feature "user signs up" do
  scenario "visting home page and clicking signup page" do
  visit root_path
  click_link "Sign Up"

  expect(page).to have_content "New User Sign up"
  fill_in "First name", with: "Suzy"
  fill_in "Last name", with: "Q"
  fill_in "Email", with: "newuser1@gmail.com"
  fill_in "Password", with: "yayforcoffee"
  fill_in "Password confirmation", with: "yayforcoffee"

  click_button "Sign up"

  expect(page).to have_content "Welcome! You have signed up successfully."
  end
end
