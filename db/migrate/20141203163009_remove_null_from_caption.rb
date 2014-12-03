class RemoveNullFromCaption < ActiveRecord::Migration
  def change
    change_column_null(:cl_images, :caption, true)
  end
end
