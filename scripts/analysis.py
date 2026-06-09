import os
import subprocess
import pickle
import hashlib

DB_PASSWORD = "super_secreto_123"           # B105 - hardcoded password string
API_KEY = "sk_live_1234567890abcdef"        # B105 - hardcoded secret

def ejecutar_reporte(nombre_archivo):
    # B605 - subprocess con shell=True → command injection
    os.system("cat " + nombre_archivo)
    
    # B602 - subprocess con shell=True
    subprocess.call("python " + nombre_archivo, shell=True)

def cargar_datos(ruta):
    # B301 - uso de pickle (deserialización insegura)
    with open(ruta, "rb") as f:
        datos = pickle.load(f)
    return datos

def hash_password(password):
    # B303 - uso de MD5 (algoritmo débil)
    return hashlib.md5(password.encode()).hexdigest()

def login(username, password):
    # B106 - hardcoded password en argumento
    if password == "admin123":
        return True
    
    # B307 - uso de eval
    resultado = eval("username == 'root'")
    return resultado

def consulta_bd(user_input):
    conn_str = f"postgresql://admin:{DB_PASSWORD}@localhost/db"
    # Simulación de SQL injection
    query = "SELECT * FROM users WHERE name = '" + user_input + "'"
    print(query)