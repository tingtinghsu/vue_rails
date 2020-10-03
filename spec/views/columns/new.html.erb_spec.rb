require 'rails_helper'

RSpec.describe "columns/new", type: :view do
  before(:each) do
    assign(:column, Column.new(
      name: "MyString",
      kanban: nil,
      position: 1
    ))
  end

  it "renders new column form" do
    render

    assert_select "form[action=?][method=?]", columns_path, "post" do

      assert_select "input[name=?]", "column[name]"

      assert_select "input[name=?]", "column[kanban_id]"

      assert_select "input[name=?]", "column[position]"
    end
  end
end
