# == Schema Information
#
# Table name: images
#
#  id                 :integer          not null, primary key
#  user_id            :integer          not null
#  description        :text
#  created_at         :datetime
#  updated_at         :datetime
#  image_file_name    :string(255)
#  image_content_type :string(255)
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Image < ActiveRecord::Base
  belongs_to :user
  
	has_attached_file(
  # use default url for missing images 
		:image,
		styles: {
			medium: "600x600>",
			thumb: "150x150>"
			},

	)
  
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
  
    
    
  #fill in comments. has many of them
end
