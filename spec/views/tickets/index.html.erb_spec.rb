require 'rails_helper'

RSpec.describe "tickets/index", type: :view do
  before(:each) do
    assign(:tickets, [
      Ticket.create!(
        name: "Name",
        column: nil,
        position: 2
      ),
      Ticket.create!(
        name: "Name",
        column: nil,
        position: 2
      )
    ])
  end

  it "renders a list of tickets" do
    render
    assert_select "tr>td", text: "Name".to_s, count: 2
    assert_select "tr>td", text: nil.to_s, count: 2
    assert_select "tr>td", text: 2.to_s, count: 2
  end
end
