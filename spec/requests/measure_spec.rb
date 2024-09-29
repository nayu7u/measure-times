require 'rails_helper'

RSpec.describe "Measures", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/measure/index"
      expect(response).to have_http_status(:success)
    end
  end
end
