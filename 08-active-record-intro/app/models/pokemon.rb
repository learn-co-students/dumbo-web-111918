class Pokemon < ActiveRecord::Base
  def fight
    "#{name} attacks with #{attack}!!!!"
  end
end
