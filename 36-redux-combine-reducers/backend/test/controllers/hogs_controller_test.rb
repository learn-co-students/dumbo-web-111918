require 'test_helper'

class HogsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @hog = hogs(:one)
  end

  test "should get index" do
    get hogs_url, as: :json
    assert_response :success
  end

  test "should create hog" do
    assert_difference('Hog.count') do
      post hogs_url, params: { hog: { greased: @hog.greased, highest_medal_achieved: @hog.highest_medal_achieved, name: @hog.name, specialty: @hog.specialty, weight_ratio: @hog.weight_ratio } }, as: :json
    end

    assert_response 201
  end

  test "should show hog" do
    get hog_url(@hog), as: :json
    assert_response :success
  end

  test "should update hog" do
    patch hog_url(@hog), params: { hog: { greased: @hog.greased, highest_medal_achieved: @hog.highest_medal_achieved, name: @hog.name, specialty: @hog.specialty, weight_ratio: @hog.weight_ratio } }, as: :json
    assert_response 200
  end

  test "should destroy hog" do
    assert_difference('Hog.count', -1) do
      delete hog_url(@hog), as: :json
    end

    assert_response 204
  end
end
