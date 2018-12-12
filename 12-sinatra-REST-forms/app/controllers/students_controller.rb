class StudentsController < ApplicationController

  get "/students" do
    @students = Student.all
    erb :"students/index"
  end

  get "/students/new" do
    @student = Student.new
    erb :"students/new"
  end

  get "/students/:id" do
    find_student
    erb :"students/show"
  end

  post "/students" do
    # params => {"name"=>"Eric", "age"=>"11", "pokemon"=>"Yes", "favorite_food"=>"Love it"}
    @student = Student.create(params[:student])
    redirect to "/students/#{@student.id}"
  end

  get '/students/:id/edit' do
    find_student
    erb :"students/edit"
  end

#   {"_method"=>"PUT",
# "name"=>"KevyWevy",
# "age"=>"75",
# "pokemon"=>"No",
# "favorite_food"=>"\u{1F95C}",
# "id"=>"22"}

# {
#   "_method"=>"PUT",
#   "id"=>"22",
#   "student" => {
#     "name"=>"KevyWevy",
#     "age"=>"75",
#     "pokemon"=>"No",
#     "favorite_food"=>"\u{1F95C}",
#   }
# }

  put '/students/:id' do
    find_student
    @student.update(params[:student])

    redirect to "/students/#{@student.id}"
  end


  delete '/students/:id' do
    find_student
    @student.destroy

    redirect to "/students"
  end


  def find_student
    @student = Student.find(params[:id])
  end

end
