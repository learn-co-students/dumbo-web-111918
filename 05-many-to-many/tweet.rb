class Tweet
  attr_accessor :content, :user

  @@all = []

  def initialize(content, user)
    @content = content
    @user = user

    @@all << self
  end

  def username
    @user.username
  end

  def likers
    #   * `#likers` that returns a
    # collection of all the Users
    # who have liked this tweet
    tweets_likes = Like.all.select do |like|
      like.tweet == self
    end
    # [like like like]
    # [user, user, user]
    tweets_likes.map do |like|
      like.user
    end

  end

  def self.all
    @@all
  end
end
