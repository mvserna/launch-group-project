Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # root "homes#index"

  root "coffeeshops#index"
  get "/coffeeshops/new", to: "coffeeshops#new"

  namespace :api do
    namespace :v1 do
      resources :coffeeshops, only: [:index, :show, :create, :new] do
        resources :reviews, only: [:index]
    end
      resources :votes, only: [:create]
    end
  end
end

