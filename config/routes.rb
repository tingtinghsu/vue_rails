Rails.application.routes.draw do

  resources :kanbans do
    # resources :columns, only: [:index, :show, :create, :update, :destroy] do
    resources :columns, except: [:new, :edit] do
      member do
        put :drag
      end
    end

    resources :tickets, only: [:create, :update, :destroy] do
      member do
        put :drag
      end
    end
  end

  devise_for :users
  # root 'pages#home'
  root 'pages#index'
  get "dashboard", to: "pages#dashboard"
end
