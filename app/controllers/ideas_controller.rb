class IdeasController < ApplicationController
    before_action :get_out
  def index
      @current_user = current_user
      @ideas = Idea.all

  end

  def create
      idea = Idea.create(idea_params.merge(user: current_user))
      if idea.valid?
          redirect_to '/ideas'
      else
          flash[:idea_errors] = idea.errors.full_messages
          redirect_to '/ideas'
      end
  end

  def show
      @current_user = current_user
      @idea = Idea.find(params[:id])
      @count = Idea.find(params[:id]).users_liked.distinct
  end

  def destroy
      Idea.destroy(params[:id])
      redirect_to '/ideas'
  end

  private
    def idea_params
        params.require(:idea).permit(:content)
    end
end
