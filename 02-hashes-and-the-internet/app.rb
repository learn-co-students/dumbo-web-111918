require 'rest-client'
require 'json'
require 'pry'


# response = RestClient.get("https://www.reddit.com/r/awww.json")
#
# response_hash = JSON.parse(response.body)

# Ask user what books they want to search *DONE
puts "Yo, welcome to book search! What books do you want to search??"
# - save user choice to be used later *DONE
answer = gets.chomp

# connect to our API & get data
url = "https://www.googleapis.com/books/v1/volumes?q=#{answer}"
# - make a get request to googleapis (with the specific query param)
response = RestClient.get(url)
# - save our response from our api
# - Parse the json so we can use it in ruby
response_hash = JSON.parse(response.body)


# Decide what we want to show our user
books = response_hash["items"]
# - we want to put to the screen:
# - title
# puts "title:"
# puts books[0]["volumeInfo"]["title"]
# # - author
# puts "author:"
# puts books[0]["volumeInfo"]["authors"]
# # - desc
# puts "desc:"
# puts books[0]["volumeInfo"]["description"]
books.each do |book|
  book_info = book["volumeInfo"]
  
  puts "title: #{book_info["title"]}"
  puts "authors: #{book_info["authors"].join(", ")}"
  puts "description: #{book_info["description"]}"
  puts "-" * 25
end

# binding.pry

0
