class RidesController < ApplicationController

  def new
    @ride = Ride.new
    @trains = Train.all
    @passengers = Passenger.all
  end

  def create
    byebug
    @ride = Ride.new(ride_params)
    if @ride.save
      redirect_to (@ride.passenger)
    else
      flash[:errors] = @ride.errors.full_messages
      render :new
    end
  end

  private
  def ride_params
    params.require(:ride).permit(:rating, :passenger_id, :train_id)
  end
end
