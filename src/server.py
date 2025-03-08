from flask import Flask, request, jsonify
import openai

app = Flask(__name__)

# Replace with your OpenAI API key
OPENAI_API_KEY = "your_openai_api_key"

openai.api_key = OPENAI_API_KEY

@app.route('/send_location', methods=['POST'])
def receive_location():
    data = request.json
    latitude = data.get('latitude')
    longitude = data.get('longitude')

    if latitude is None or longitude is None:
        return jsonify({"error": "Missing latitude or longitude"}), 400

    # Send the coordinates to OpenAI Assistant
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "You are an assistant that provides insights about locations."},
            {"role": "user", "content": f"My coordinates are {latitude}, {longitude}. What can you tell me about this place?"}
        ]
    )

    return jsonify({"response": response['choices'][0]['message']['content']})

if __name__ == '__main__':
    app.run(debug=True)
