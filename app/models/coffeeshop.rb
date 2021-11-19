class Coffeeshop < ApplicationRecord
  has_many :reviews
  
  validates :name, presence: true
  validates :address, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :zip, presence: true

  mount_uploader :image, ImageUploader
end