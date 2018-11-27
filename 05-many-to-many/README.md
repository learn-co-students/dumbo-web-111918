# Many to Many Relationships

Based off of yesterday's code, we're going to add the ability to like a tweet. We describe this specific relationship between users and tweets as a many to many relationship. Meaning that a user can like many tweets and a tweet can be liked by many users!

> **Note:** This is a separate relationship from the one to many that we built before. That relationship could be called "posted tweets" whereas this relationship should be called "liked tweets".

## The world so far

* Create a User class. The class should have these methods:
  * `#initialize` which takes a username and have
  * a reader method for the username
  * `#tweets` that returns an array of Tweet instances
  * `#post_tweet` that takes a message, creates a new tweet, and adds it to the user's tweet collection
  <!-- * `#print_all_tweets`? -->
* Create a Tweet class. The class should have these methods:
  * `#initialize` which takes a content of a tweet and an instance of a user object
  * `Tweet#content` that returns a string
  * `Tweet#user` that returns an instance of the user class
  * `Tweet.all` that returns all the Tweets created.
  * `Tweet#username` that returns the username of the tweet's user


## Deliverables

<!-- * Like class
  * needs two instance variables that hold a tweet instance and a user instance on initialize -->
* User class
  <!-- * `#like_tweet` that accepts as a tweet instance as a parameter and creates a like -->
  <!-- * `#liked_tweets` that returns a collection of all the tweets this user has liked -->
  <!-- * `#number_of_likes` that returns number of likes this user has done. -->
  <!-- *  `#liked_tweets_contents` returns the contents of each of a user's liked tweets in an array -->


* Tweet class
  <!-- * `#likers` that returns a collection of all the Users who have liked this tweet -->
  * `#liked_by_user` that accepts as a user instance as a parameter and creates a like
  *  `#liker_usernames` returns an array usernames of each of the users who liked this specific tweet tweet instance

  ``#likes`???
