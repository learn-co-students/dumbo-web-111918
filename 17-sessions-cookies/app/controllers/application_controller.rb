class ApplicationController < ActionController::Base

  before_action :setup_voting_attrs


  def setup_voting_attrs
    
    # if cookies["votes"]
    #   cookies["votes"] = 5
    # end

    session["votes"] ||= 5
    @votes = session["votes"]
    @can_vote = session["votes"] > 0
    @error = flash["error"]
    # session["error"] = nil
  end


  def use_one_vote
    session["votes"] = session["votes"] - 1
  end
  
end