class CreateColumns < ActiveRecord::Migration[6.0]
  def change
    create_table :columns do |t|
      t.string :name
      t.belongs_to :kanban, null: false, foreign_key: true
      t.integer :position

      t.timestamps
    end
  end
end
