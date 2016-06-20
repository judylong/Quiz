class AddLeftAndRightColumns < ActiveRecord::Migration
  def change
    add_column :questions, :qtext_left, :integer
    add_column :questions, :qtext_right, :integer
  end
end
