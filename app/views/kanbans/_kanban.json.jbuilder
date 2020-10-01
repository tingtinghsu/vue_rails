json.extract! kanban, :id, :name, :description, :user_id, :created_at, :updated_at
json.url kanban_url(kanban, format: :json)
