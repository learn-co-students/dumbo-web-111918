## Introduction to the internet

* What is the difference between the Internet and the Web?

* How can I find out the IP address of www.flatironschool.com using a terminal command? What kind of server makes this lookup possible?
  104.218.140.34 -> flatironschool
  router ->
  10.39.105.11 -> Kevin's computer

- indentifier for a specific computer
- DNS domain name server (phonebook lookup)
  - go to flatironschool.com -> what is this website's ip
  - get back some ip address
- lookup of ip to website name

* What is the request / response cycle? With a client and server, which makes the request? Which sends the response?
  - Client is what we are using to navigate the web (google chrome)
  - Sever is a thing that contains the total information about some website or app
  - the client sends a request to a server
  - request is a way to submit to a server a request about what we want
  - the server responds to that request with the info we want if it can

* What is a HTTP request? Make a few, using at least two of these tools: Google Chrome, Postman, curl, telnet (this one is a little tricky!)
  - hyper text transfer protocol
  - asking for some html?

* What is usually in the body of an HTTP _response_?
- Headers & a body are the two parts of a response
- what is in the body
- html css js?

* What is a URL? Which part of a URL is the scheme (protocol)? Where is the host? The port? The path? Query string? Fragment? What is the purpose of each of these parts? Which parts are required, and which are optional?


* What is a HTTP status code? What do the codes 200, 404, 500, 503, 302, 422 and 418 mean?
  - depending on the number you get back it tells you about the request

* Why do we use HTTP verbs? What is the difference between what GET, POST, PUT, PATCH, and DELETE requests do?
  - Similar to CRUD but over the web.
  - asking = GET
  - POST = create something
  - PUT or PATCH = change something
  - DELETE

* Use the Google Chrome inspector (or similar tools in other browsers) to find the headers for an HTTP request. What do you think these headers do?

* What is a web server? What is Rack? What is the difference between Rack and a web server? What is the difference between Rack and Sinatra?

* What's the difference between static and dynamic websites? What are some of the benefits of a dynamic website? How does Rack facilitate building dynamic websites?
- cant change anything in a static website
- the opposite

### BONUS
* How can I trace the route to a server over the internet using a terminal command? Pick a website in a far-off country and try it. Use [this site](https://iplocation.com/) to find the locations of the IP addresses on the way to your destination!

*************** 3 min break! ********************













## Intro to Sinatra
* Build a basic web app in 30 seconds
* Do basic web requests in Sinatra
* Explain what Sinatra is
* Walk through `corneal new`
* Talk about `shotgun`
* Walk through Sinatra basic file structure
* Walk through Model View Controller \(MVC\) pattern and give an example
* Explain how web frameworks \(like Sinatra\) use the MVC pattern and why
