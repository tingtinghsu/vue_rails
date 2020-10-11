class ColumnChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "column_channel_#{params[:column_id]}"
    stream_from "column"
  end

  def unsubscribed
  end
end
