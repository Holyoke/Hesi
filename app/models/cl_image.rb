# == Schema Information
#
# Table name: cl_images
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  caption    :string(255)
#  public_id  :string(255)      not null
#  created_at :datetime
#  updated_at :datetime
#

class ClImage < ActiveRecord::Base
  belongs_to(
    :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "User"
  )
  
end
