class AddColumnsForFiltering < ActiveRecord::Migration
  def change
    add_column :questions, :negatives, :boolean
    add_column :questions, :operation, :string
    add_column :questions, :left_digits, :integer
    add_column :questions, :right_digits, :integer
    add_column :questions, :ans_digits, :integer
  end
end
