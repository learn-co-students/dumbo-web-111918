class FoodsController < ApplicationController
  get '/foods/:id' do
    @food = Food.find(params[:id])

    erb :"foods/show"
  end
end
