Rails.application.routes.draw do
  resources :pictures, only: [:index, :show]
  resources :pixels, only: [:create, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
