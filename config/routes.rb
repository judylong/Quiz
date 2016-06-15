Rails.application.routes.draw do
  root to: 'site#root'

  namespace :api, defaults: { format: :json } do
    resources :questions
  end
  
end
