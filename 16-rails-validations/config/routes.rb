Rails.application.routes.draw do
  resources :rides
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :trains
  resources :passengers, only: [:index, :show, :new, :create, :edit, :update]
end
