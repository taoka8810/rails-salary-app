class TestsController < ApplicationController
  def index
    tests = Test.all
    render json: tests
  end

  def create
    Test.create(test_params)
    head :created
  end

  private

  def test_params
    params.permit(:name, :number)
  end
end
