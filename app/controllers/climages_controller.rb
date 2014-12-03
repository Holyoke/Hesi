class ClimagesController < ApplicationController
  
  def index
    resources = Cloudinary::Api.resources["resources"]
    @images_id = resources.map{ |resource| resource["public_id"]}
    render :index
  end
  
  #upload images
  def new
    @climage = ClImage.new()
    @user = current_user
    render :new
  end
  
  def create
    @climage = ClImage.new(climage_params)
    if current_user.climages(climage_params).save
      redirect_to climag_url(@climage)
    else
      flash.now[:errors] = @climage.errors.full_messages
      render :new
    end
  end
  
  def show
    @climage = ClImage.find(params[:id])
    render :show
  end
  
  private 
  def climage_params
    params.require(:climage).permit(:public_id)
  end
end
