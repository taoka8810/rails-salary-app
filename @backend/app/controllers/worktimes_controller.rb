class WorktimesController < ApplicationController
  def index
    worktimes = Worktime.all
    render json: worktimes
  end

  def create
    Worktime.create(params)
    head :created
  end

  private

  def params
    params.permit(:worktime, :date)
  end

end
