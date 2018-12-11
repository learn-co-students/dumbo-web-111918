require "sinatra"

# my request
get "/" do
  # server's response
  "<html><head></head><body><div>#{"💩" * 99}</div></body></html>"
end

get '/potato' do
  "<html><head></head><body><div>Hello World</div></body></html>"
end

post "/happy" do
  "<html><head></head><body><div>#{"🤡" * 100}</div></body></html>"
end
