from flask import Flask, request, jsonify
from flask_cors import CORS
from notion_api.notion_client import NotionClient

app = Flask(__name__)
CORS(app)
notion_client = NotionClient()

@app.route('/api/pages', methods=['GET'])
def get_pages():
    data = notion_client.read_database()
    if data:
        pages = data['results']
        return jsonify(pages)
    else:
        return jsonify({'error': 'Unable to fetch pages'}), 500

@app.route('/api/pages', methods=['POST'])
def create_page():
    data = request.json
    title = data.get('title')
    text = data.get('text')
    response = notion_client.create_page(title, text)
    if response and response.get("status") == "error":
        return jsonify({'error': response.get("message")}), response.get("code", 500)
    return jsonify({'message': 'Page created successfully'}), 201

@app.route('/api/pages/<page_id>', methods=['PATCH'])
def update_page(page_id):
    data = request.json
    title = data.get('title')
    text = data.get('text')
    response = notion_client.update_page(page_id, title, text)
    if response and response.get("status") == "error":
        return jsonify({'error': response.get("message")}), response.get("code", 500)
    return jsonify({'message': 'Page updated successfully'}), 200

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
