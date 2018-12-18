class TrainsController < ApplicationController
  before_action :find_train, only: [:show, :edit, :update, :destroy]

  def index
    @trains = Train.all
  end

  def show
  end

  def new
    @train = Train.new
  end

  def create
    @train = Train.create(train_params)
    
    redirect_to @train
  end

  def edit
  end

  def update
    @train.update(train_params)

    redirect_to @train
  end

  def destroy
    @train.destroy

    redirect_to trains_path
  end

  private

  def find_train
    @train = Train.find(params[:id])
  end

  def train_params
    params.require(:train).permit(:line)
  end
end
