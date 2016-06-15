class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.text :qtext, null: false
      t.string :answer, null: false
      t.text :distractors, null: false

      t.timestamps null: false
    end
  end
end
