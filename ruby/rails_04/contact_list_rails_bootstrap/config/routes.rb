Rails.application.routes.draw do

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  #nome_do_controller + nome_da_action(funcao no controller)
  root to: "static_pages#index"
  get 'sobre', to: "static_pages#sobre"
  get 'contato', to: "static_pages#contato"

  get 'cadastro', to: "users#new"
  get 'entrar', to: "sessions#new"
  post 'entrar', to: "sessions#create"
  delete 'sair', to:'sessions#destroy'


  resources :users, only: [:show, :new, :create, :edit, :update] do
    resources :contacts, only:[:index, :new, :create, :edit, :update, :destroy]
  end

  resources  :sessions, only: [:new, :create, :destroy]

end
