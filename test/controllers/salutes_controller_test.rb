require "test_helper"

class SalutesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get salutes_index_url
    assert_response :success
  end
end
