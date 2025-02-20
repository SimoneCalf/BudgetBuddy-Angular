from flask import Flask, request, jsonify
import sqlite3
from sql.sql import get_users

app = Flask(__name__)

@app.route('/login', methods=['GET' ,'POST'])
def login():
    users = get_users()
    print(users)


if __name__ == '__main__':
    print("🚀 Flask server wordt gestart...")
    app.run(debug=True) 