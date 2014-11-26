Rails.application.routes.draw do
  root to: 'root#root'
  
  resources :users
  resource :session
  
  namespace :api, defaults: { format: :json} do
    resources :images
  end
end
