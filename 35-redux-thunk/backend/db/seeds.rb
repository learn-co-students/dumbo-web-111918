# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Hobbit.destroy_all
Hog.destroy_all
hobbit_data = [
  {
    id: 1,
    name: 'Oin',
    title: 'Banking Specialist',
    field: 'Farming',
    seniority: 'Chief',
    position: 'Assistant',
    key_skill: 'Proactive',
    employment_type: 'Commission',
    image_url: 'https://vignette.wikia.nocookie.net/lotr/images/e/e8/Oin.jpg/revision/latest?cb=20120908125247',
    created_at: '2018-02-20T15:57:05.513Z',
    updated_at: '2018-02-20T16:46:38.786Z'
  },
  {
    id: 2,
    name: 'Roac',
    title: 'Banking Supervisor',
    field: 'Design',
    seniority: 'Central',
    position: 'Technician',
    key_skill: 'Self-motivated',
    employment_type: 'Temporary',
    image_url: 'https://orig00.deviantart.net/a3cb/f/2014/177/3/a/mme__16__our_list_of_allies_grows_thin____by_peckishowl-d6p33f7.jpg',
    created_at: '2018-02-20T15:57:05.519Z',
    updated_at: '2018-02-20T16:47:30.342Z'
  },
  {
    id: 3,
    name: 'Dwalin',
    title: 'Legacy Designer',
    field: 'Healthcare',
    seniority: 'Dynamic',
    position: 'Officer',
    key_skill: 'Confidence',
    employment_type: 'Commission',
    image_url: 'https://vignette.wikia.nocookie.net/thehobbitfilm/images/1/1f/Dwalin.png/revision/latest/scale-to-width-down/1000?cb=20151220215202',
    created_at: '2018-02-20T15:57:05.527Z',
    updated_at: '2018-02-20T16:48:14.467Z'
  },
  {
    id: 4,
    name: 'Balin',
    title: 'Regional Retail Technician',
    field: 'Marketing',
    seniority: 'District',
    position: 'Producer',
    key_skill: 'Works well under pressure',
    employment_type: 'Temporary',
    image_url: 'https://vignette.wikia.nocookie.net/lotr/images/5/52/Balin.jpg/revision/latest?cb=20120911171656',
    created_at: '2018-02-20T15:57:05.533Z',
    updated_at: '2018-02-20T16:49:00.890Z'
  },
  {
    id: 5,
    name: 'Bard the Bowman',
    title: 'Central Retail Specialist',
    field: 'Technology',
    seniority: 'District',
    position: 'Liaison',
    key_skill: 'Fast learner',
    employment_type: 'Part-time',
    image_url: 'https://vignette.wikia.nocookie.net/peter-jacksons-the-hobbit/images/f/fb/Bard_Bowman.jpg/revision/latest?cb=20160102183357',
    created_at: '2018-02-20T15:57:05.541Z',
    updated_at: '2018-02-20T16:49:30.913Z'
  },
  {
    id: 6,
    name: 'The Great Goblin',
    title: 'Investor Coordinator',
    field: 'Technology',
    seniority: 'Customer',
    position: 'Representative',
    key_skill: 'Self-motivated',
    employment_type: 'Internship',
    image_url: 'http://kaiju.wdfiles.com/local--files/wiki%3Agreat_goblin/great_goblin_2012_01.jpg',
    created_at: '2018-02-20T15:57:05.550Z',
    updated_at: '2018-02-20T16:50:22.434Z'
  }
]

hobbit_data.each do |hob|
  Hobbit.create(hob)
end


#makes some random hobbits without pictures
6.times do
  Hobbit.create(name: Faker::Hobbit.character,
                title: Faker::Job.title,
                field: Faker::Job.field,
                seniority: Faker::Job.seniority,
                position: Faker::Job.position,
                key_skill: Faker::Job.key_skill,
                employment_type: Faker::Job.employment_type)
end


hog_data = [
  {
    name: 'Mudblood',
    specialty: 'Mediocre magic',
    greased: false,
    weight_ratio: 2.0,
    highest_medal_achieved: 'bronze'
  },
  {
    name: 'Porkchop',
    specialty: 'Making friends',
    greased: true,
    weight_ratio: 1.6,
    highest_medal_achieved: 'silver'
  },
  {
    name: 'Cherub',
    specialty: 'truffle finder',
    greased: false,
    weight_ratio: 0.7,
    highest_medal_achieved: 'gold'
  },
  {
    name: 'Piggy smalls',
    specialty: 'Massivity',
    greased: true,
    weight_ratio: 5.1,
    highest_medal_achieved: 'platinum'
  },
  {
    name: 'Trouble',
    specialty: 'Racing',
    greased: true,
    weight_ratio: 1.7,
    highest_medal_achieved: 'gold'
  },
  {
    name: 'Sobriety',
    specialty: 'Expert Witness',
    greased: false,
    weight_ratio: 2.2,
    highest_medal_achieved: 'silver'
  },
  {
    name: 'Rainbowdash',
    specialty: 'Union Busting',
    greased: false,
    weight_ratio: 3.7,
    highest_medal_achieved: 'wood'
  },
  {
    name: 'TruffleShuffle',
    specialty: 'Finding truffles',
    greased: true,
    weight_ratio: 4.0,
    highest_medal_achieved: 'gold'
  },
  {
    name: 'Bay of Pigs',
    specialty: 'Hamphlet Distribution',
    greased: false,
    weight_ratio: 2.8,
    highest_medal_achieved: 'diamond'
  },
  {
    name: 'The Prosciutto Concern',
    specialty: 'truffle finder',
    greased: false,
    weight_ratio: 2.3,
    highest_medal_achieved: 'bronze'
  },
  {
    name: 'Galaxy Note',
    specialty: 'Airport Security',
    greased: true,
    weight_ratio: 1.9,
    highest_medal_achieved: 'diamond'
  },
  {
    name: 'Leggo My Eggo',
    specialty: 'Babysitting',
    greased: true,
    weight_ratio: 3.3,
    highest_medal_achieved: 'platinum'
  },
  {
    name: 'Augustus Gloop',
    specialty: 'Vacuum tubes',
    greased: true,
    weight_ratio: 4.1,
    highest_medal_achieved: 'wood'
  }
]

hog_data.each do |hog|
  Hog.create(hog)
end
