class PassengersController < ApplicationController
  before_action :find_trains, only: [:new, :edit]

  def index
    @passengers = Passenger.all
  end

  def show
    @passenger = Passenger.find(params[:id])
  end

  def new
    @passenger = Passenger.new
  end

  def create
    @passenger = Passenger.new(passenger_params)
    byebug
    if @passenger.valid?
      @passenger.save
      redirect_to @passenger
    else
      #flash is a hash
      flash[:errors] = @passenger.errors.full_messages
      render :new
    end
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
