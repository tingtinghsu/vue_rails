require 'rails_helper'

RSpec.describe "columns/edit", type: :view do
  before(:each) do
    @column = assign(:column, Column.create!(
      name: "MyString",
      kanban: nil,
      position: 1
    ))
  end

  it "renders the edit column form" do
    render

    assert_select "form[action=?][method=?]", column_path(@column), "post" do

      assert_select "input[name=?]", "column[name]"

      assert_select "input[name=?]", "column[kanban_id]"

      assert_select "input[name=?]", "column[position]"
    end
  end
end
