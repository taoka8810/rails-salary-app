class CreateWorks < ActiveRecord::Migration[7.0]
  def change
    create_table :works do |t|
      t.integer :worktime, null: false
      t.integer :salary, null: false 
      t.date :date, null: false
      t.timestamps
    end
  end
end
