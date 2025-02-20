from flask import Flask, request, jsonify
import sqlite3
from database.database.py import get_users, add_user

app = Flask(__name__)

@app.route('/login', methods=['POST'])
def login():
    users = get_users()
    print(users)


if __name__ == '__main__':
    print("🚀 Flask server wordt gestart...")
    app.run(debug=True) 