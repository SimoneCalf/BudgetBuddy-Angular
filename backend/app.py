from flask import Flask, request, jsonify, session
import sqlite3
from sql.sql import get_user_by_name, get_users
from flask_cors import CORS

app = Flask(__name__)
app.secret_key = "supersecretkey"
CORS(app)

@app.route('/login', methods=['POST'])
def login():
    users = get_users()
    print(users)
    data = request.json
    username = data.get("username")
    password = data.get("password")

    if not username or not password:
        return jsonify({"error": "Vul alle velden in"}), 400
    
    user = get_user_by_name(username)

    if user:
        session["username"] = username
        return jsonify({"success": "Je bent ingelogd"}), 200
    else:
        return jsonify({"error": "Gebruikersnaam of wachtwoord is onjuist"}), 401



# @app.route('/login', methods=['GET' ,'POST'])
# def login():
#     users = get_users()
#     print(users)


if __name__ == '__main__':
    print("🚀 Flask server wordt gestart...")
    app.run(debug=True) 