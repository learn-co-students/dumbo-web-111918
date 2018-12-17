class PassengersController < ApplicationController
  before_action :find_trains, only: [:new, :edit]

  def show
    @passenger = Passenger.find(params[:id])
  end

  def new
    @passenger = Passenger.new
  end

  def create
    byebug
    @passenger = Passenger.create(passenger_params)
    redirect_to @passenger
  end

  def edit
    @passenger = Passenger.find(params[:id])
  end

  def update
    @passenger = Passenger.find(params[:id])
    @passenger.update(passenger_params)

    redirect_to @passenger
  end

  private

  def find_trains
    @trains = Train.all
  end

  def passenger_params
    params.require(:passenger).permit(:name, :train_id)
  end
end
