class Api::V1::SalutesController < ApiController
  def index
    @salute = Salute.all.order('random()').first
    render json: { salute: @salute.message }
  end
end