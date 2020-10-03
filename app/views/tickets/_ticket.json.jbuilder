json.extract! ticket, :id, :name, :column_id, :position, :created_at, :updated_at
json.url ticket_url(ticket, format: :json)
