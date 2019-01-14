class PixelsController < ApplicationController

  # GET /pictures/1
  def create
    # byebug
    @pixel = Pixel.new(pixel_params)
    if @pixel.save
      render json: @pixel
    else
      render json: {}, status: 422
    end
  end


  def update
    @pixel = Pixel.find(params[:id])
    if @pixel.update(pixel_params)
      render json: @pixel
    else
      render json: {}, status: 422
    end
  end

  def destroy
    Pixel.delete(params[:id])
  end

  private

  def pixel_params  
    params.require(:pixel).permit(:picture_id, :color, :x, :y)
  end

end
