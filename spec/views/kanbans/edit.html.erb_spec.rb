require 'rails_helper'

RSpec.describe "kanbans/edit", type: :view do
  before(:each) do
    @kanban = assign(:kanban, Kanban.create!(
      name: "MyString",
      description: "MyString",
      user: nil
    ))
  end

  it "renders the edit kanban form" do
    render

    assert_select "form[action=?][method=?]", kanban_path(@kanban), "post" do

      assert_select "input[name=?]", "kanban[name]"

      assert_select "input[name=?]", "kanban[description]"

      assert_select "input[name=?]", "kanban[user_id]"
    end
  end
end
