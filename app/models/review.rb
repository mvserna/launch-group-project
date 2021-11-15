class Review < ApplicationRecord
  belongs_to :coffeeshop
  belongs_to :user

  validates :rating, numericality: { in: 0..5 }, presence: true
  validates :body, presence: true
end