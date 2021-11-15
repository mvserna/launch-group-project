class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :body, :rating, :name

  def name
    self.object.user.first_name
  end
end
