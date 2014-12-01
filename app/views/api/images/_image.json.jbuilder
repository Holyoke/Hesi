json.(image, :id, :created_at, :description)

json.file_name image.image_file_name

json.owner image.user, :id, :username