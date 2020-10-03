require 'rails_helper'

RSpec.describe "tickets/edit", type: :view do
  before(:each) do
    @ticket = assign(:ticket, Ticket.create!(
      name: "MyString",
      column: nil,
      position: 1
    ))
  end

  it "renders the edit ticket form" do
    render

    assert_select "form[action=?][method=?]", ticket_path(@ticket), "post" do

      assert_select "input[name=?]", "ticket[name]"

      assert_select "input[name=?]", "ticket[column_id]"

      assert_select "input[name=?]", "ticket[position]"
    end
  end
end
