class StudentsController < ApplicationController

  get "/students" do
    @students = Student.all
    erb :"students/index"
  end

  get "/students/new" do
    erb :"students/new"
  end

  get "/students/:id" do
    @student = Student.find(params[:id])
    erb :"students/show"
  end

  post "/students" do
    # binding.pry
    # params => {"name"=>"Eric", "age"=>"11", "pokemon"=>"Yes", "favorite_food"=>"Love it"}
    @student = Student.create(params)
    redirect to "/students/#{@student.id}"
  end


end
