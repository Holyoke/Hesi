class SessionsController < ApplicationController
  before_action :require_authentication, except: [:new, :create]
  
  def new
    @user = User.new
  end
  
  def create
    @user = User.find_by_credentials(params[:user])
    
    if @user
      sign_in!(@user)
      redirect_to '/climages'
    else
      flash.now[:errors] = ["Invalid credentials"]
      render :new
    end
  end 
  
  def destroy
    sign_out!
    redirect_to new_session_url
  end
end
