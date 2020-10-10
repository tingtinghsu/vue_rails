class TicketsController < ApplicationController
  before_action :find_ticket, only: [:show, :edit, :update, :destroy, :drag]

  # GET /tickets
  # GET /tickets.json
  def index
    @tickets = Ticket.all
  end

  # GET /tickets/1
  # GET /tickets/1.json
  def show
  end

  # GET /tickets/new
  def new
    @ticket = Ticket.new
  end

  # GET /tickets/1/edit
  def edit
  end

  def drag
    # byebug
    @ticket.update(ticket_params)
    # @ticket.insert_at(ticket_params[:position].to_i)    
    render 'show.json'
  end

  #  url: `/kanbans/${this.column.kanban_id}/tickets
  # POST /tickets
  # POST /tickets.json
  def create
    @ticket = Ticket.new(ticket_params)

    respond_to do |format|
      if @ticket.save
        format.json { render :show, status: :created }
      else
        format.html { render :new }
        format.json { render json: @ticket.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /tickets/1
  # PATCH/PUT /tickets/1.json
  def update
    respond_to do |format|
      if @ticket.update(ticket_params)
      # ActionCable.server.broadcast("column", @ticket)        
      ActionCable.server.broadcast("column", { commit: 'UPDATE_TICKET', payload: render_to_string(:show, format: :json)})        
        format.json { render :show, status: :ok}
      else
        format.json { render json: @ticket.errors, status: :unprocessable_entity }
      end
    end
  end


  # DELETE /tickets/1
  # DELETE /tickets/1.json
  def destroy
    @ticket.destroy
    respond_to do |format|
      puts "destroy success"
      ActionCable.server.broadcast("column", { commit: 'DELETE_TICKET', payload: render_to_string(:show, format: :json)})       
      format.json { head :no_content }      
      # format.json { render :show }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def find_ticket
      @ticket = Ticket.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def ticket_params
      params.require(:ticket).permit(:name, :column_id, :position)
    end
end
