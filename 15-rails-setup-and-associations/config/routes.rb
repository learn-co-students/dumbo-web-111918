Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :trains
  resources :passengers, only: [:show, :new, :create, :edit, :update]
end
