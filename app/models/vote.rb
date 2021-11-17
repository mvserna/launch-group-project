class Vote < ApplicationRecord
  belongs_to :review
  belongs_to :user

  validates :upvotes, presence: true, numericality: { in: 0..1 }
  validates :downvotes, presence: true, numericality: { in: 0..1 }
end