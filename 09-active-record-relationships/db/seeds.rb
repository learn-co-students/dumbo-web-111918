charmander = Pokemon.create(name: "Charmander", poke_type: "Fire", attack: "Ember")
kevywevy = Trainer.create(name: "KevyWevy")
PokeBall.create(pokemon: charmander,
  trainer: kevywevy,
  nickname: "Soon to be Charizard")

puts "all done~"
