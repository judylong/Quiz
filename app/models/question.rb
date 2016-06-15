class Question < ActiveRecord::Base
  validates :qtext, :answer, :distractors, presence: true
end
