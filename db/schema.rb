# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160620014130) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "questions", force: :cascade do |t|
    t.text     "qtext",        null: false
    t.string   "answer",       null: false
    t.text     "distractors",  null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.boolean  "negatives"
    t.string   "operation"
    t.integer  "left_digits"
    t.integer  "right_digits"
    t.integer  "ans_digits"
    t.integer  "qtext_left"
    t.integer  "qtext_right"
  end

  add_index "questions", ["qtext"], name: "index_questions_on_qtext", unique: true, using: :btree

end
