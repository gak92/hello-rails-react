Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      get '/random_greeting', to: 'greetings#greeting'
    end
  end

  # get 'greetings/index'
  resources :greeting
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root "greetings#index"
end
