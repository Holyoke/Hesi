json.(image, :id, :created_at, :caption, :public_id, )

json.file_name image.public_id

json.owner image.user, :id, :username