class LikesController < ApplicationController
  def index
  end

  def create
      Like.create(user: current_user, idea: Idea.find(params[:id]))
      redirect_to '/ideas'
  end
end
