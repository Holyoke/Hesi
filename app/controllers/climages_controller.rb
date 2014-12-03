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
    #this is so bad
    #it adds the image to the ClImages model so it can be viewed
    #wow
    climage = current_user.climages(:public_id => params[:id])
    
    unless current_user.climages.include? (climage)
      current_user.climages.create(:public_id => params[:id])
    end
    
    @climage = ClImage.friendly.find(params[:id])
    render :show
  end
  
  def update
   @climage = ClImage.find(params[:id])
   if @climage.update_attributes(self.climage_params)
     render "show"
   else
     render :json => @climage.errors, :status => :unprocessable_entity
   end
  end
  
  private 
  def climage_params
    params.require(:cl_image).permit(:public_id)
  end
end
