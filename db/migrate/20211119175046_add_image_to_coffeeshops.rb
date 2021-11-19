class AddImageToCoffeeshops < ActiveRecord::Migration[6.1]
  def change
    add_column :coffeeshops, :image, :string
  end
end
