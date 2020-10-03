class CreateTickets < ActiveRecord::Migration[6.0]
  def change
    create_table :tickets do |t|
      t.string :name
      t.belongs_to :column, null: false, foreign_key: true
      t.integer :position

      t.timestamps
    end
  end
end
