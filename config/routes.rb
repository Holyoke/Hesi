Rails.application.routes.draw do
  root 'root#root'
  
  resources :users
  resource :session
  
  namespace :api, defaults: { format: :json} do
    resources :images, only: [:show, :index]
  end
end
