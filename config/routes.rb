Rails.application.routes.draw do
  resources :tickets
  resources :columns
  resources :kanbans
  devise_for :users
  # root 'pages#home'
  root 'pages#index'
  get "dashboard", to: "pages#dashboard"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

end
