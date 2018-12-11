require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :welcome
  end

  get "/squirrels" do
    @squirrel_emoji = "🐿"
    @query = params["q"]
    if @query.to_s.empty?
      @squirrels = Squirrel.all
    else
      @squirrels = Squirrel.all.where(name: @query)
    end

    erb :index
  end

end
