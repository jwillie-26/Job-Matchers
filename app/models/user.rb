class User < ApplicationRecord

    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true;

    has_many :jobs , dependent: :destroy
    has_many :reviews, through: :jobs


end
