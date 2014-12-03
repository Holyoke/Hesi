class ClimagesController < ApplicationController
  
  def index
    resources = Cloudinary::Api.resources["resources"]
    @images_id = resources.map{ |resource| resource["public_id"]}
    render :index
  end
  
  #upload images
  def new
    @climage = Climagew.new 
  end
  
  def create
    
  end
  
  
  private 
  def climage_params
    params.require(:climage).permit(:public_id)
  end
end
