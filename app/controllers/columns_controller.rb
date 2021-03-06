class ColumnsController < ApplicationController
  before_action :find_column, only: [:show, :edit, :update, :destroy, :drag]
  before_action :authenticate_user!
  # GET /columns.json
  def index
    @kanban = Kanban.find(params[:kanban_id])    
    @columns = @kanban.columns.all
  end

  # GET /columns/1
  # GET /columns/1.json
  def show
  end

  # GET /columns/new
  def new
    @column = Column.new
  end

  # GET /columns/1/edit
  def edit
  end


  # POST /columns
  # POST /columns.json
  def create
    @column = Column.new(column_params)

    respond_to do |format|
      if @column.save
        format.html { redirect_to @column, notice: 'Column was successfully created.' }
        format.json { render :show, status: :created, location: @column }
      else
        format.html { render :new }
        format.json { render json: @column.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /columns/1
  # PATCH/PUT /columns/1.json
  def update
    respond_to do |format|
      if @column.update(column_params)
        format.html { redirect_to @column, notice: 'Column was successfully updated.' }
        format.json { render :show, status: :ok, location: @column }

      else
        format.html { render :edit }
        format.json { render json: @column.errors, status: :unprocessable_entity }
      end
    end
  end

  def drag
    # byebug
    @column.insert_at(column_params[:position].to_i)
    # http://localhost:3335/kanbans/2/columns/2.json

    # puts(kanban_columns_path(2).json)
    puts("----@column------")
    puts(@column.kanban.id)         
    # ActionCable.server.broadcast("column", @column)
    # ActionCable.server.broadcast("column", "drag to new position")     
    # ActionCable.server.broadcast("column", column_params[:position].to_i)
    # ActionCable.server.broadcast("column", {commit: 'UPDATE_COLUMNS'})   
    
    # ActionCable.server.broadcast "column", {commit: 'UPDATE_COLUMNS', payload: render_to_string('kanban_columns_path(2)', format: :json)}   
    # ActionCable.server.broadcast("column", { commit: 'UPDATE_COLUMNS', payload: render_to_string(:show, format: :json)}) 

    render 'show.json'
  end

  # DELETE /columns/1
  # DELETE /columns/1.json
  def destroy
    @column.destroy
    respond_to do |format|
      format.html { redirect_to columns_url, notice: 'Column was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def find_column
      @column = Column.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def column_params
      params.require(:column).permit(:name, :kanban_id, :position)
    end
end
