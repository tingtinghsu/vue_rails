require 'rails_helper'

RSpec.describe "columns/index", type: :view do
  before(:each) do
    assign(:columns, [
      Column.create!(
        name: "Name",
        kanban: nil,
        position: 2
      ),
      Column.create!(
        name: "Name",
        kanban: nil,
        position: 2
      )
    ])
  end

  it "renders a list of columns" do
    render
    assert_select "tr>td", text: "Name".to_s, count: 2
    assert_select "tr>td", text: nil.to_s, count: 2
    assert_select "tr>td", text: 2.to_s, count: 2
  end
end
