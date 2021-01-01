Rails.application.routes.draw do

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  #nome_do_controller + nome_da_action(funcao no controller)
  root to: "static_pages#index"

  get 'sobre', to: "static_pages#sobre"

  get 'contato', to: "static_pages#contato"


  resources :contacts
  resources :users, only: [:new, :create]

end
