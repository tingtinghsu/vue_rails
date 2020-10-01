require 'rails_helper'

RSpec.describe "kanbans/new", type: :view do
  before(:each) do
    assign(:kanban, Kanban.new(
      name: "MyString",
      description: "MyString",
      user: nil
    ))
  end

  it "renders new kanban form" do
    render

    assert_select "form[action=?][method=?]", kanbans_path, "post" do

      assert_select "input[name=?]", "kanban[name]"

      assert_select "input[name=?]", "kanban[description]"

      assert_select "input[name=?]", "kanban[user_id]"
    end
  end
end
