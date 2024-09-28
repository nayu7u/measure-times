class CreateTasks < ActiveRecord::Migration[7.2]
  def change
    create_table :tasks do |t|
      t.string :name
      t.time :starts_at
      t.time :ends_at
      t.date :starts_on
      t.timestamps
    end
  end
end
