Rails.application.routes.draw do
  get "works" => "works#index"
  get "salary" => "works#salary"
  post "works" => "works#create"

  get "tests" => "tests#index"
  post "tests" => "tests#create"
end
