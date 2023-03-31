class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response


    def index
        reviews = Review.all
        render json: reviews;
    end

    def create
        # create! exceptions will be handled by the rescue_from ActiveRecord::RecordInvalid code
        review = Review.create!(review_params)
        render json: review, status: :created
    end

      # DELETE /reviews/:id
    def destroy
        review = find_review
        review.destroy
        render json: {}
        # head :no_content
    end

    # update reviews
    def update
        review = find_review
        review.update(review_params)
        render json: review
    end

    def show
        review = find_review
        render json: review
    end

    private

    def find_review
        Review.find(params[:id])
    end

    def review_params
        params.permit(:user_id, :job_id, :review)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: { error: "Review not found" }, status: :not_found
    end
end
