require 'test_helper'

class PicturesControllerindexControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get pictures_controllerindex_show_url
    assert_response :success
  end

end
