class CreateClImages < ActiveRecord::Migration
  def change
    create_table :cl_images do |t|
      t.integer :user_id, null: false
      t.string :caption, null: false
      t.string :public_id, null: false

      t.timestamps
    end
  end
end
