require 'pry'
# environment & application setup
# requiring relative and necessary files to make our app communicate
require "./user"
require "./tweet"

coffee_dad = User.new("coffee_dad")
kevin = User.new("KevyWevy")

tweet1 = Tweet.new("coffee, yum yum in my tum!", coffee_dad)
tweet2 = Tweet.new("coffee is good", coffee_dad)
tweet3 = Tweet.new("I look into the darkness...", coffee_dad)
coffee_dad.post_tweet("Yummy yummy coffeee")
coffee_dad.post_tweet("coffffffffeeeeee")
# c-dad has 5 tweets 

# kevin's tweets
tweet4 = Tweet.new("hi", kevin)
tweet5 = Tweet.new("hi hi hi", kevin)
tweet6 = Tweet.new("I am freindly", kevin)
tweet7 = Tweet.new("programming is confusing!!", kevin)
kevin.post_tweet("sup twitter.")
# kevin has 5 tweets

binding.pry

puts 'done'
