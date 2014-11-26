# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string(255)      not null
#  password_digest :string(255)      not null
#  session_token   :string(255)      not null
#  created_at      :datetime
#  updated_at      :datetime
#

class User < ActiveRecord::Base
  validates :username, :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true}
  
  attr_reader :password
  
  has_many :images
  
  after_initialize :ensure_session_token
  
  def self.find_by_credentials(user_params)
    user = User.find_by_username(user_params[:username])
    return nil unless user && user.valid_password?(user_params[:password])
    user
  end
  
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
  
  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
  
  # this will give back a token
  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end
  
  protected
  
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
