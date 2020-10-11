class Kanban < ApplicationRecord
  after_create :onboard_data
  has_many :columns, -> { order(position: :asc) }, dependent: :destroy
  belongs_to :user
  validates :name, presence: true

  def onboard_data
    columns.create(name: "Backlog")
    columns.create(name: "Sprint Backlog")
    columns.create(name: "Working On")
    columns.create(name: "Bugs")
    columns.create(name: "Done")
    columns.create(name: "Testing")
  end
end
