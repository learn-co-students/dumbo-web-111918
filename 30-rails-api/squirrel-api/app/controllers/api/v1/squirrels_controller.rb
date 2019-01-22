class Api::V1::SquirrelsController < ApplicationController

  def index
    @squirrels = Squirrel.all
    render json: @squirrels #, each_serializer: SquirrelSimpleSerializer
  end

end
