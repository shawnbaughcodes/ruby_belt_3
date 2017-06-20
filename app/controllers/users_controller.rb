class UsersController < ApplicationController
    before_action :get_out, except: [:new, :create]
  def new
      if current_user
          redirect_to '/ideas'
      end
  end

  def create
      user = User.create(user_params)
      if user.valid?
          session[:user_id] = user.id
          redirect_to "/ideas"
      else
          flash[:user_errors] = user.errors.full_messages
          redirect_to '/'
      end
  end

  def show
      @user = User.find(params[:id])
  end

  private
    def user_params
        params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end
end
