json.extract! ticket, :id, :name, :column_id, :position
json.url ticket_url(ticket, format: :json)
