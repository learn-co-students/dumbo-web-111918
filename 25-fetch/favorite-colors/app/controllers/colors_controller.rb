class ColorsController < ApplicationController
  before_action :set_color, only: [:show, :update, :destroy]

  # GET /colors
  def index
    @colors = Color.includes(:votes).all.map do |col|
      {
        id: col.id,
        hex: col.hex,
        votes: col.votes.count,
      }
    end

    render json: @colors
  end

  # DELETE /colors/1
  def destroy
    @color.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_color
      @color = Color.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def color_params
      params.fetch(:color, {})
    end
end
