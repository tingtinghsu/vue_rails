FactoryBot.define do
  factory :column do
    name { "MyString" }
    kanban { nil }
    position { 1 }
  end
end
