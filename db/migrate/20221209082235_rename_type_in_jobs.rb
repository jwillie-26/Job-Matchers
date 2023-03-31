class RenameTypeInJobs < ActiveRecord::Migration[6.1]
  def change
    rename_column :jobs, :type, :job_mode
  end
end
