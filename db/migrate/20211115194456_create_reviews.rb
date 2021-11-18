class CreateReviews < ActiveRecord::Migration[6.1]
  def change
  create_table :reviews do |t|
    t.belongs_to :coffeeshop, null: false
    t.belongs_to :user, null: false
    t.text :body, null: false
    t.integer :rating, null: false

    t.timestamps
  end
  end
end
