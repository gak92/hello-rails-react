class Api::V1::GreetingsController < ApplicationController
  def greeting
    @greetings = Greeting.all
    @greeting = @greetings[rand(@greetings.length)]
    render json: @greeting
  end
end
