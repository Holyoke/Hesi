json.array!(@images) do |image|
	json.extract! image, :id, :user_id, :image_file_name
end