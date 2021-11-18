class CreateCoffeeshops < ActiveRecord::Migration[6.1]
  def change
  create_table :coffeeshops do |t|
    t.string :name, null: false
    t.string :address, null: false
    t.string :city, null: false
    t.string :state, null: false
    t.string :zip, null: false
    t.text :description
    
    t.timestamps null: false
  end
  end
end
