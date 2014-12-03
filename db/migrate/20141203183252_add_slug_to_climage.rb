class AddSlugToClimage < ActiveRecord::Migration
  def change
    add_column :cl_images, :slug, :string
    add_index :cl_images, :slug, :unique => true
  end
  
end
