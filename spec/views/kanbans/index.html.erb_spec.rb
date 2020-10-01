require 'rails_helper'

RSpec.describe "kanbans/index", type: :view do
  before(:each) do
    assign(:kanbans, [
      Kanban.create!(
        name: "Name",
        description: "Description",
        user: nil
      ),
      Kanban.create!(
        name: "Name",
        description: "Description",
        user: nil
      )
    ])
  end

  it "renders a list of kanbans" do
    render
    assert_select "tr>td", text: "Name".to_s, count: 2
    assert_select "tr>td", text: "Description".to_s, count: 2
    assert_select "tr>td", text: nil.to_s, count: 2
  end
end
