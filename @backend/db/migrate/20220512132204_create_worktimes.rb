class CreateWorktimes < ActiveRecord::Migration[7.0]
  def change
    create_table :worktimes do |t|
      t.integer :worktime, null: false
      t.date :date, null: false
      t.timestamps
    end
  end
end
