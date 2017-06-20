class User < ActiveRecord::Base
  has_secure_password
  has_many :ideas
  has_many :likes
  has_many :liked_ideas, through: :likes, source: :idea
  validates :name, :email, presence:true
end
