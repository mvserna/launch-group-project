require 'factory_bot'

FactoryBot.define do
  factory :user do
  first_name { "John" }
  sequence(:last_name) { |n| "Doe #{n}" }
  sequence(:email) {|n| "user#{n}@example.com" }
  password { 'password' }
  password_confirmation { 'password' }
  end

end
