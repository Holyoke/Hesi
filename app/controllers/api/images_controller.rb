class Api::ImagesController < ApplicationController
  # before_action :require_authentication
  
  #create image
  def new 
    
  end
  
  def create
  end
  
  #read
  def show
  end
  
  def index
    #replace User.first with current_user
    @images = User.find(4).images
    render :index
  end
  
  #update, not yet
  
  #destroy 
  def destroy
  end
  
  private 
  def image_params
    params.require(:image).permit(:image, :description)
  end
end

