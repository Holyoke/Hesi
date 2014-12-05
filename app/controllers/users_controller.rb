class UsersController < ApplicationController
  before_action :require_authentication, except: [:new, :create]
  
  def new
    @user = User.new
  end
  
  def create
    @user = User.new(user_params)
    if @user.save
      sign_in!(@user)
      redirect_to "#"
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end
  
  def show
    @user = User.find(params[:id])
    render :show
  end
  
  def update
    @user = User.find(params[:id])
    if @user.save
      debugger
      redirect_to "/climages"
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end
  
  private
  def user_params
    params.require(:user).permit(:username, :password, :avatar)
  end
end
