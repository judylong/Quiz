module Api
  class QuestionsController < ApiController
    def index
      @questions = Question.all
      render :index
    end

    def show
      @question = Question.find(params[:id])
      render :show
    end

    def create
      @question = Question.new(question_params)
      if @question.save
        render :show
      else
        render json: @question.errors.full_messages, status: :unprocessable_entity
      end
    end

    def update
      @question = Question.find(params[:id])
      if @question.update_attributes(question_params)
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
      params.require(:question).permit(:qtext, :answer, :distractors)
    end
  end
end
