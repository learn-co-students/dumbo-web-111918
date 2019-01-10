class PicturesController < ApplicationController
  before_action :set_picture, only: [:show, :update, :destroy]

  # GET /pictures
  def index
    @pictures = Picture.all

    render json: @pictures
  end

  # GET /pictures/1
  def show
    render json: @picture
  end


  private
  # Use callbacks to share common setup or constraints between actions.
  def set_picture
    @picture = Picture.find(params[:id])
  end


end
