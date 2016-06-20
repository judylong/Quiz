class UniqueOnQtextCol < ActiveRecord::Migration
  def change
    add_index :questions, :qtext, :unique => true
  end
end
