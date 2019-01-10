require 'test_helper'

class PicturesControllerControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get pictures_controller_index_url
    assert_response :success
  end

  test "should get show" do
    get pictures_controller_show_url
    assert_response :success
  end

end
