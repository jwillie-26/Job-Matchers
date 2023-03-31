class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
      t.integer :user_id
      t.string :company_name
      t.string :company_logo
      t.string :job_type
      t.integer :salary
      t.string :description
      t.string :type

      t.timestamps
    end
  end
end
