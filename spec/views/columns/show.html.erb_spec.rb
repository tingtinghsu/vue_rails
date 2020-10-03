require 'rails_helper'

RSpec.describe "columns/show", type: :view do
  before(:each) do
    @column = assign(:column, Column.create!(
      name: "Name",
      kanban: nil,
      position: 2
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(//)
    expect(rendered).to match(/2/)
  end
end
