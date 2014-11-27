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
    @images = Image.all
    
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

