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

require 'test_helper'

class ImageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
