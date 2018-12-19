class VotesController < ApplicationController

  def create
    if @can_vote
      @vote = Vote.create(color_id: params[:color_id])
      use_one_vote
    else
      flash["error"] = "You're out of votes 💁‍♀️"
    end
    redirect_to colors_path
  end

end

