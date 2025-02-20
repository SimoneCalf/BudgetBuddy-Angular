import sqlite3

DB_PATH = "database/FlowTrack.db"

def get_db_connection():
    """ Maakt een verbinding met de SQLite database """
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row  # Zorgt ervoor dat we dictionary-achtige resultaten krijgen
    return conn

def get_users():
    """ Haalt alle gebruikers op uit de database """
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT username, password FROM users")
    users = {row["username"]: row["password"] for row in cursor.fetchall()}
    conn.close()
    return users