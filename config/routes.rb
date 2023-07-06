Rails.application.routes.draw do
  # get 'salutes/index'
  namespace :api do
    namespace :v1 do
      resources :salutes, only: [:index]
    end
  end
  
  root 'salutes#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
