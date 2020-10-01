class KanbansController < ApplicationController
  before_action :set_kanban, only: [:show, :edit, :update, :destroy]

  # GET /kanbans
  # GET /kanbans.json
  def index
    @kanbans = Kanban.all
  end

  # GET /kanbans/1
  # GET /kanbans/1.json
  def show
  end

  # GET /kanbans/new
  def new
    @kanban = Kanban.new
  end

  # GET /kanbans/1/edit
  def edit
  end

  # POST /kanbans
  # POST /kanbans.json
  def create
    @kanban = Kanban.new(kanban_params)

    respond_to do |format|
      if @kanban.save
        format.html { redirect_to @kanban, notice: 'Kanban was successfully created.' }
        format.json { render :show, status: :created, location: @kanban }
      else
        format.html { render :new }
        format.json { render json: @kanban.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /kanbans/1
  # PATCH/PUT /kanbans/1.json
  def update
    respond_to do |format|
      if @kanban.update(kanban_params)
        format.html { redirect_to @kanban, notice: 'Kanban was successfully updated.' }
        format.json { render :show, status: :ok, location: @kanban }
      else
        format.html { render :edit }
        format.json { render json: @kanban.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /kanbans/1
  # DELETE /kanbans/1.json
  def destroy
    @kanban.destroy
    respond_to do |format|
      format.html { redirect_to kanbans_url, notice: 'Kanban was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_kanban
      @kanban = Kanban.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def kanban_params
      params.require(:kanban).permit(:name, :description)
    end
end
