import requests
import json

def get_openai_response(prompt):
    api_key = "YOUR_API_KEY"
    url = API_KEY
    
    payload = {
        "model": "gpt-3.5-turbo",  # Or other model
        "messages": [
            {"role": "user", "content": prompt}
        ]
    }
    
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }
    
    response = requests.post(url, headers=headers, json=payload)
    response_data = response.json()
    
    return response_data["choices"][0]["message"]["content"]

# Example usage
# print(get_openai_response("Hello, how are you?"))
