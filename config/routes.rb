Rails.application.routes.draw do
  get 'root/index'

  namespace :api do
    namespace :v1 do
      get '/random_greeting', to: 'greetings#greeting'
    end
  end

  # get 'greetings/index'
  resources :greetings
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root "root#index"
end
