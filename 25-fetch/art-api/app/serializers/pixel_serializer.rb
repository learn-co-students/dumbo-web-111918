class PixelSerializer < ActiveModel::Serializer
  attributes :id, :picture_id, :x ,:y, :color
end