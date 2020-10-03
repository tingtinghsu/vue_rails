class Kanban < ApplicationRecord
  has_many :columns, -> { order(position: :asc)}, dependent: :destroy
  belongs_to :user
  validates :name, presence: true
end
