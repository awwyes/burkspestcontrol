export default function handler(req, res) {
    var payload = {
        // "source_id": params[:nonce],
        // "verification_token": params[:token],
        "autocomplete": true,
        "location_id": process.env.SANDBOX_LOCATION_ID,
        "amount_money": {
            "amount": 100,
            "currency": "USD"
        },
        "idempotency_key": SecureRandom.uuid
    }
    url = "https://connect.squareupsandbox.com/v2/payments"
    // res = HTTP.auth("Bearer #{SANDBOX_ACCESS_TOKEN}").post(url, :body => payload.to_json)
    // render json: res.body
}