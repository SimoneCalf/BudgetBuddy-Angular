from flask import Flask, request, jsonify, session
import sqlite3
from sql.sql import get_user_by_name, get_users
from flask_cors import CORS

app = Flask(__name__)
app.secret_key = "supersecretkey"
app.config['SESSION_COOKIE_SAMESITE'] = 'None'
app.config['SESSION_COOKIE_SECURE'] = True
CORS(app, supports_credentials=True)

@app.route('/login', methods=['POST'])
def login():
    users = get_users()
    print(f'users: {users}')
    data = request.json
    username = data.get("username")
    password = data.get("password")

    print(f'username: {username}')
    print(f'password: {password}')

    if not username or not password:
        return jsonify({"error": "Vul alle velden in"}), 400
    
    user = get_user_by_name(username)  # Haal de gebruiker op uit de database
    print(f'user: {user}')

    if user and user["password"] == password:  # Controleer of het wachtwoord klopt
        session["username"] = username
        user_id = user["user_id"]  # Haal de user_id op uit de database
        session["user_id"] = user_id  # Optioneel: sla de user_id op in de sessie
        print(f'username_session: {session["username"]}, user_id_session: {session["user_id"]}')
        return jsonify({"success": "Je bent ingelogd", "user_id": user_id}), 200
    else:
        return jsonify({"error": "Gebruikersnaam of wachtwoord is onjuist"}), 401

@app.route('/is_logged_in', methods=['GET'])
def is_logged_in():
    username = session.get("username")
    if username:
        return jsonify({"logged_in": True, "username": username}), 200
    else:
        return jsonify({"logged_in": False}), 200

@app.route('/logout', methods=['POST'])
def logout():
    session.pop("username", None)
    return jsonify({"success": "Je bent uitgelogd"}), 200

if __name__ == '__main__':
    print("🚀 Flask server wordt gestart...")
    app.run(debug=True)