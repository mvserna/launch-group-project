require 'rails_helper'

feature "user signs out" do
  let!(:test_user) { FactoryBot.create(:user)}

  scenario "visting any page and clicking sign out link" do
    
    login_as(test_user)

    visit root_path

    click_link "Sign Out"

    expect(page).to have_content "Signed out successfully."
  end
end