module Api
  class QuestionsController < ApiController
    wrap_parameters false
    def index
      if params[:query]
        @questions = Question.where(nil)
        params[:query].each do |key, value|
          @questions = @questions.public_send(key, value) if value.present?
        end
      else
        @questions = Question.all
      end
      render :index
    end

    def show
      @question = Question.find(params[:id])
      render :show
    end

    def create
      @question = Question.new(qtext: question_params['qtext'],
                      answer: question_params['answer'],
                      distractors: question_params['distractors'],
                      left_digits: Question.count_digits(question_params['qtext_left']),
                      right_digits: Question.count_digits(question_params['qtext_right']),
                      ans_digits: Question.count_digits(question_params['answer']),
                      negatives: Question.is_neg(question_params['qtext_left']) ||
                                 Question.is_neg(question_params['qtext_right']) ||
                                 Question.is_neg(question_params['answer']),
                      operation: question_params['qtext_operation'],
                      qtext_right: question_params['qtext_right'],
                      qtext_left: question_params['qtext_left']
      )

      if @question.save
        render :show
      else
        render json: @question.errors.full_messages, status: :unprocessable_entity
      end
    end

    def update
      @question = Question.find(params[:id])
      if @question.update_attributes(qtext: question_params['qtext'],
                      answer: question_params['answer'],
                      distractors: question_params['distractors'],
                      left_digits: Question.count_digits(question_params['qtext_left']),
                      right_digits: Question.count_digits(question_params['qtext_right']),
                      ans_digits: Question.count_digits(question_params['answer']),
                      negatives: Question.is_neg(question_params['qtext_left']) ||
                                 Question.is_neg(question_params['qtext_right']) ||
                                 Question.is_neg(question_params['answer']),
                      operation: question_params['qtext_operation'],
                      qtext_right: question_params['qtext_right'],
                      qtext_left: question_params['qtext_left']
      )
        render :json => @question
      else
        render :json => @question.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @question = Question.find(params[:id])
      @question.try(:destroy)
      render json: {}
    end

    private
    def question_params
      params.require(:question).permit(:qtext, :answer, :distractors, :query, :qtext_left, :qtext_right, :qtext_operation)
    end
  end
end
