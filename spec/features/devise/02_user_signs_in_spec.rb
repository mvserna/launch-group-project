require 'rails_helper'

feature "user signs in" do
  let!(:test_user) { FactoryBot.create(:user)}

  scenario "visting home page and clicking sign in link" do
  visit root_path
  click_link "Sign In"

  expect(page).to have_content "Log in"
  fill_in "Email", with: test_user.email
  fill_in "Password", with: test_user.password

  click_button "Log in"

  expect(page).to have_content "Signed in successfully."
  end
end