


100.times do |num|
  chunks = ["FF", "00"]  
  chunks << sprintf("%02X", rand(0...255))
  Color.create(hex: chunks.shuffle.join(""))
end


