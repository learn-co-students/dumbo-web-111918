class CreateAcorns < ActiveRecord::Migration[5.2]
  def change
    create_table :acorns do |t|
      t.integer :crunchiness
      t.belongs_to :squirrel
      
      t.timestamps
    end
  end
end
