class CoffeeshopSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :city, :state, :zip, :description, :reviews

  def reviews
    reviews = Review.where(coffeeshop_id: self.object.id)

    reviews.map do |review|
      upvotes = 0
      if !review.votes.empty?
        upvotes = review.votes.filter { |record| record.upvotes == 1 }.count
      end
      
      downvotes = 0
      if !review.votes.empty?
        downvotes = review.votes.filter { |record| record.downvotes == 1 }.count
      end
    
      previous_vote = Vote.find_by(review_id: review.id, user: current_user)
      previous_upvote = false
      previous_downvote = false
      
      if previous_vote && previous_vote.upvotes == 1
        previous_upvote = true
      elsif previous_vote && previous_vote.downvotes == 1
        previous_downvote = true
      end

      {
        id: review.id,
        name: review.user.first_name,
        body: review.body,
        rating: review.rating,
        upvotes: upvotes,
        downvotes: downvotes,
        user_already_upvoted: previous_upvote,
        user_already_downvoted: previous_downvote
      }
    end
  end
end
