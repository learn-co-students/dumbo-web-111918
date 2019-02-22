class HogsController < ApplicationController
  before_action :set_hog, only: [:show, :update, :destroy]

  # GET /hogs
  def index
    @hogs = Hog.all

    render json: @hogs
  end

  # GET /hogs/1
  def show
    render json: @hog
  end

  # POST /hogs
  def create
    @hog = Hog.new(hog_params)

    if @hog.save
      render json: @hog, status: :created, location: @hog
    else
      render json: @hog.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /hogs/1
  def update
    if @hog.update(hog_params)
      render json: @hog
    else
      render json: @hog.errors, status: :unprocessable_entity
    end
  end

  # DELETE /hogs/1
  def destroy
    @hog.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_hog
      @hog = Hog.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def hog_params
      params.require(:hog).permit(:name, :specialty, :greased, :weight_ratio, :highest_medal_achieved)
    end
end
