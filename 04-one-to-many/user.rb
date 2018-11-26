class User
  attr_reader :username

  def initialize(username)
    @username = username
  end

  def tweets
    Tweet.all.select do |tweet|
      tweet.user == self
    end
  end

  def post_tweet(message)
    Tweet.new(message, self)
    "we have posted your tweet!"
  end
end

# coffee_dad.post_tweet("coffe is good")
