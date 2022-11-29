Rails.application.routes.draw do
  # get 'greetings/index'
  resources :greeting
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root "greetings#index"
end
