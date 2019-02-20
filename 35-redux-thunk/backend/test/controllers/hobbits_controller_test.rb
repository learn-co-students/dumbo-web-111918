require 'test_helper'

class HobbitsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get hobbits_index_url
    assert_response :success
  end

end
