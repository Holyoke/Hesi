# == Schema Information
#
# Table name: images
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  description :text
#  created_at  :datetime
#  updated_at  :datetime
#

class Image < ActiveRecord::Base
  belongs_to :user
  
  #fill in comments. has many of them
end
