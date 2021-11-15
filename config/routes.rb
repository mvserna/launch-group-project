Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # root "homes#index"

  root "homes#index"

  resources :coffeeshops, only: [:index]

  namespace :api do
    namespace :v1 do
<<<<<<< Updated upstream
      resources :coffeeshops, only: [:index]
=======
      resources :coffeeshops, only: [:index, :show] do
        resources :reviews, only: [:index]
      end
>>>>>>> Stashed changes
    end
  end

end