class ApplicationController < ActionController::API

  def encode_token(payload)
     JWT.encode(payload, '')
   end

   def auth_header
      request.headers['Authorization']
    end


   def decoded_token
     token = auth_header
     JWT.decode(token, '')[0]
   end

   def current_user
    if decoded_token
      user_id = decoded_token[0]['']
      @user = User.find_by(id: user_id)
    end
  end

  def logged_in?
    !!current_user
  end

end