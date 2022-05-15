class WorksController < ApplicationController
  def index
    works = Work.all
    render json: works
  end

  def salary
    salary = Work.pluck(:salary).sum
    render json: salary
  end

  def create
    Work.create(work_params)
    head :created
  end

  private

  def work_params
    params.permit(:worktime, :salary, :date)
  end
end
