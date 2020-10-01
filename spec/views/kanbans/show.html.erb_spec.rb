require 'rails_helper'

RSpec.describe "kanbans/show", type: :view do
  before(:each) do
    @kanban = assign(:kanban, Kanban.create!(
      name: "Name",
      description: "Description",
      user: nil
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/Description/)
    expect(rendered).to match(//)
  end
end
