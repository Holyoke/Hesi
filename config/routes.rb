Rails.application.routes.draw do 
  mount Attachinary::Engine => "/attachinary"
  
  root "sessions#new"
  resources :users
  resource :session
  
  resources :climages
  
  namespace :api, defaults: { format: :json} do
    resources :images, only: [:show, :index]
  end
end
