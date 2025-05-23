from flask import Flask, request, jsonify
import logging

app = Flask(__name__)
logging.basicConfig(level=logging.INFO)

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.form.to_dict() or request.get_json(force=True, silent=True) or {}
    app.logger.info('Received contact form data: %s', data)
    return jsonify({'status': 'success'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
