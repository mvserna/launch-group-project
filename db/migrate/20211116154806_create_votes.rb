class CreateVotes < ActiveRecord::Migration[6.1]
  def change
    create_table :votes do |t|
      t.belongs_to :review, null: false
      t.belongs_to :user, null: false
      t.integer :upvotes
      t.integer :downvotes
      
      t.timestamps
    end
  end
end
