class MeasureController < ApplicationController
  def index
    @tasks = Task.all
  end
end
