Rails.application.routes.draw do
  get "worktimes" => "worktimes#index"
  post "worktimes" => "worktimes#create"

  get "tests" => "tests#index"
  post "tests" => "tests#create"
end
