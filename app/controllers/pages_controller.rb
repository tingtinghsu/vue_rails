class PagesController < ApplicationController
  before_action :authenticate_user!, only: [:dashboard]  
  def home
    
  end
  def index
    if current_user
      redirect_to dashboard_path

    end    
  end
  def dashboard
    
  end
end
