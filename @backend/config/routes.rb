Rails.application.routes.draw do
  get "worktimes" => "worktimes#index"
  post "worktimes" => "worktimes#create"
end
