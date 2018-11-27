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

  def like_tweet(tweet)
    Like.new(tweet, self)
    "liked tweet!"
  end

  def likes
    # first we find all the likes
    # that kevin(our current user/self) liked
    Like.all.select do |like|
      like.user == self
    end
  end

  def liked_tweets
    # that returns a collection of
    # all the tweets this user has liked

    # then we need to turn these likes into tweets
    # from [like, like, like]
    # to => [tweet, tweet, tweet]
    likes.map do |like|
      like.tweet
    end
  end

  def liked_tweets_contents
    liked_tweets.map do |tweet|
      tweet.content
    end
  end

  def number_of_likes
    likes.count
  end

end
