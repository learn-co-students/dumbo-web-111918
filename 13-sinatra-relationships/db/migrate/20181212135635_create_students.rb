class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students do |t|
      t.string :name
      t.integer :age
      t.string :favorite_food
      t.string :pokemon
    end
  end
end
