
require "pry"
require "rest-client"
require "json"

url = "https://www.googleapis.com/books/v1/volumes?q=hotdog+water"

response = RestClient.get(url)
hash = JSON.parse(response)
books = hash['items']

puts "We found #{books.count} books for hotdog water!"
puts "Here they are:"
puts
books.each do |book|
	authors = book["volumeInfo"]["authors"]
	puts book["volumeInfo"]["title"]
	if authors
		puts authors.join(" & ")
	else
		puts "What kind of book doesn't have an Author?!"
	end

	puts "*" * 25

end



puts "What kind of books to ya wanna look for?"
search_term = gets.chomp

book_response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{search_term}").body


puts book_response


# binding.pry

# puts 'sup!








# ---------------------------------------------------------------

# "https://www.googleapis.com/books/v1/volumes?q=hotdog+water"


# response = RestClient.get("https://www.reddit.com/r/awww/.json")


# Ask a user for a word(s) to search the book database with
#  - puts something to terminal to ask for user input
#  - save user input to use later
puts "yo, tell me what you wanna search for :)"
search_term = gets.chomp

# Use google books api to search for the search term
# - useing our rest client
# - dynamically use the saved input from user to search through api
# - converting JSON to a ruby hash
response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{search_term}")
response_hash = JSON.parse(response.body)

books = response_hash["items"]
# Displaying the results
# - first show one result
# - show every result
# - show title
# - show authors
# - show description?

books.each do |book|
  puts book["volumeInfo"]["title"]
  puts book["volumeInfo"]["authors"].join(" & ")
  puts book["volumeInfo"]["description"]
  puts "*" * 25
end
# Get fancy & make the results prettier


# binding.pry


puts "sup! We learning some stufff"
