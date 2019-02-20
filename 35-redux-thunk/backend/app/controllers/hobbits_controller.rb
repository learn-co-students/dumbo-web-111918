class HobbitsController < ApplicationController
  def index
    @hobbits = Hobbit.all
    render json: @hobbits, status: 200
  end

  def update
    @hobbit = Hobbit.find(params[:id])
    if @hobbit.update(hobbit_params)
      render json: @hobbit, status: 200
    else
      render json: {message: "Couldn't update your hob's job"}, status: 401
    end
  end

  private

  def hobbit_params
    params.require(:hobbit).permit(:name, :title,:key_skill, :image_url)
  end

end
