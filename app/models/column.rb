class Column < ApplicationRecord
  acts_as_list scope: :kanban  
  has_many :tickets, -> { order(position: :asc)}, dependent: :destroy
  belongs_to :kanban
  validates :name, presence: true  
end
