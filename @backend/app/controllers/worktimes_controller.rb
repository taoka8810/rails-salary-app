class WorktimesController < ApplicationController
  def index
    worktimes = Worktime.all
    render json: worktimes
  end

  def create
    Worktime.create(worktime_params)
    head :created
  end

  private

  def worktime_params
    params.permit(:worktime, :date)
  end

end
