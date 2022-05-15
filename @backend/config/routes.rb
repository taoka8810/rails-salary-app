Rails.application.routes.draw do


  get "tests" => "tests#index"
  post "tests" => "tests#create"
end
