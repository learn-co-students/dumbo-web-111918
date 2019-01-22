class SquirrelSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :acorns, serializer: AcornWithCrunchinessSerializer
end
