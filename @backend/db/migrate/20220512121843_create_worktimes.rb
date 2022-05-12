class CreateWorktimes < ActiveRecord::Migration[7.0]
  def change
    create_table :worktimes do |t|

      t.timestamps
    end
  end
end
