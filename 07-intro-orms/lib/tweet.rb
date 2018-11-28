class Tweet
  attr_accessor :message, :username, :id
  # @@all = []

  def self.all
    # write some sql to get all of the tweets in the database (each row)
    sql = <<-SQL
      SELECT * FROM tweets
    SQL

    # connect to our database
    response = DB[:conn].execute(sql)
    # [hash, hash]
    # => [tweet, tweet]
    response.map do |tweet_hash|
      Tweet.new(tweet_hash["message"], tweet_hash["username"], tweet_hash["id"])
    end

    # @@all
  end

  def initialize(message, username, id=nil)
    @message = message
    @username = username
    @id = id
    # self.save no no no
    # @@all << self
  end

  def self.create(message, username)
    tweet = Tweet.new(message, username)
    tweet.save
  end

  def save
    sql = <<-SQL
      INSERT INTO tweets
      (username, message)
      VALUES ("#{@username}", "#{@message}");
    SQL

    DB[:conn].execute(sql)
  end






end
