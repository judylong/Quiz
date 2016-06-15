File.readlines(File.join(Rails.root, 'db', 'code_challenge_question_dump.csv')).drop(1).each do |line|
  cols = line.chomp.split("|")
  Question.create(qtext: cols[0], answer: cols[1], distractors: cols[2])
end
