File.readlines(File.join(Rails.root, 'db', 'code_challenge_question_dump.csv')).drop(1).each do |line|
  cols = line.chomp.split("|")
  qtextsplit = cols[0].split(" ")
  def is_neg(str)
    num = str.to_i
    num < 0 ? true : false
  end

  def count_digits(str)
    is_neg(str) ? str.length - 1 : str.length
  end

  Question.create(qtext: cols[0],
                  answer: cols[1],
                  distractors: cols[2],
                  left_digits: count_digits(qtextsplit[2]),
                  right_digits: count_digits(qtextsplit[4][0...-1]),
                  ans_digits: count_digits(cols[1]),
                  negatives: is_neg(qtextsplit[2]) ||
                             is_neg(qtextsplit[4][0...-1]) ||
                             is_neg(cols[1]),
                  operation: qtextsplit[3]
  )
end
