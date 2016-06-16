class Question < ActiveRecord::Base
  validates :qtext, :answer, :distractors, presence: true

  scope :negatives, -> (dummy) {where("negatives = ?", false)}
  scope :operation, -> (operations) {where(operation: operations)}
  scope :num_left_dig, -> (digits) {where(left_digits: digits)}
  scope :num_right_dig, -> (digits) {where(right_digits: digits)}
  scope :num_ans_dig, -> (digits) {where(ans_digits: digits)}
  # scope :num_distractors, -> (digits) {where(ans_digits: digits)}
  scope :ordering, -> (ordering) {order(ordering)}
  scope :group_by_operations, -> (dummy) {order(:operation)}
end
