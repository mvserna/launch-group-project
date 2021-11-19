Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # root "homes#index"

  root "coffeeshops#index"
  get "/coffeeshops/new", to: "coffeeshops#new"

  resources :coffeeshops, only: [:index, :show, :new]

  namespace :api do
    namespace :v1 do
      resources :coffeeshops, only: [:index, :show, :create] do
        resources :reviews, only: [:index]
      end
      resources :reviews, only: [:create]
      resources :votes, only: [:create]
    end
  end
end

