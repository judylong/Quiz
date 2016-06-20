class Question < ActiveRecord::Base
  # validates :qtext, :answer, :distractors, presence: true

  scope :negatives, -> (dummy) {where("negatives = ?", false)}
  scope :operation, -> (operations) {where(operation: operations)}
  scope :num_left_dig, -> (digits) {where(left_digits: digits)}
  scope :num_right_dig, -> (digits) {where(right_digits: digits)}
  scope :num_ans_dig, -> (digits) {where(ans_digits: digits)}
  # scope :num_distractors, -> (digits) {where(ans_digits: digits)}
  scope :ordering, -> (ordering) {order(ordering)}
  scope :group_by_operations, -> (dummy) {order(:operation)}

  def self.is_neg(str)
    num = str.to_i
    num < 0 ? true : false
  end

  def self.count_digits(str)
    self.is_neg(str) ? str.length - 1 : str.length
  end

end
