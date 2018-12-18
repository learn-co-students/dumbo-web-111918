class RemoveTrainIdFromPassengers < ActiveRecord::Migration[5.2]
  def change
    remove_column :passengers, :train_id, :integer
  end
end
