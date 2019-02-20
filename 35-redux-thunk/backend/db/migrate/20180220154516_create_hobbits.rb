class CreateHobbits < ActiveRecord::Migration[5.1]
  def change
    create_table :hobbits do |t|
      t.string :name
      t.string :title
      t.string :field
      t.string :seniority
      t.string :position
      t.string :key_skill
      t.string :employment_type
      t.string :image_url

      t.timestamps
    end
  end
end
