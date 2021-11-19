class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :body, :user_id, :coffeeshop_id

  def user_id
    current_user
  end

end
