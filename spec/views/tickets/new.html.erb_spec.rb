require 'rails_helper'

RSpec.describe "tickets/new", type: :view do
  before(:each) do
    assign(:ticket, Ticket.new(
      name: "MyString",
      column: nil,
      position: 1
    ))
  end

  it "renders new ticket form" do
    render

    assert_select "form[action=?][method=?]", tickets_path, "post" do

      assert_select "input[name=?]", "ticket[name]"

      assert_select "input[name=?]", "ticket[column_id]"

      assert_select "input[name=?]", "ticket[position]"
    end
  end
end
