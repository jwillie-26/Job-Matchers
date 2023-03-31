class Job < ApplicationRecord

    validates :user_id, presence: true;
    validates :company_name, presence: true
    validates :company_logo, presence: true;
    validates :job_type, presence: true;
    validates :description, presence: true;
    validates :salary, presence: true;
    validates :location, presence: true;
    validates :job_mode, inclusion: {in:["parttime", "fulltime"]} 

  
    belongs_to :user

    has_many :reviews, dependent: :destroy

end
