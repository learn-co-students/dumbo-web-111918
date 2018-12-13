class ChangeStudentsFavoriteFoodToForeignKey < ActiveRecord::Migration
  def change
    add_column :students, :food_id, :integer
    remove_column :students, :favorite_food, :string
  end
end
