class PictureSerializer < ActiveModel::Serializer
  attributes :id
  has_many :pixels
end