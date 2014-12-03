class ClimagesController < ApplicationController
  
  def index
    resources = Cloudinary::Api.resources["resources"]
    @images_id = resources.map{ |resource| resource["public_id"]}
    render :index
  end
  
  #upload images
  def new
    @climage = ClImages.new()
    render :new
  end
  
  def create
    @climage = CLImages.new(climage_params)
    if @climage.save
      redirect_to climag_url(@climage)
    else
      flash.now[:errors] = @climage.errors.full_messages
      render :new
    end
  end
  
  def show
    @climage = CLImages.find(params[:id])
    render :show
  end
  
  
  private 
  def climage_params
    params.require(:climage).permit(:public_id)
  end
end
