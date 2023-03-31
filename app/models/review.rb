class Review < ApplicationRecord
    validates :user_id, presence: true;
    validates :job_id, presence: true;
    validates :review, presence: true;

    belongs_to :job
    belongs_to :user
end
