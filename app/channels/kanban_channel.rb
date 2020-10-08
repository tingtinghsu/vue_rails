class KanbanChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "kanban_channel_#{params[:kanban_id]}"
    stream_from "kanban"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
