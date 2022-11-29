class GreetingsController < ApplicationController
  def index
    @greeting = Greeting.all
  end
end
