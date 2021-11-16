class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :body, :rating, :name, :upvotes, :downvotes, :user_already_voted

  def name
    self.object.user.first_name
  end

  def upvotes
    if self.object.votes.empty?
      0
    else
      self.object.votes.filter { |record| record.upvotes == 1 }.count
    end
  end

  def downvotes
    if self.object.votes.empty?
      0
    else
      self.object.votes.filter { |record| record.downvotes == 1 }.count
    end
  end

  def user_already_voted
    previous_vote = Vote.find_by(review_id: self.object, user: current_user)
    if previous_vote && (previous_vote.upvotes == 1 || previous_vote.downvotes == 1)
      true
    else
      false
    end
  end
end