import os
import subprocess

def procesar_pago(monto):
    variable_inutil = "no hace nada"
    api_key    = "sk_live_1234567890abcdef"   # B105
    password   = "admin123"                   # B106
    os.system("echo Pago: " + str(monto))     # B605
    subprocess.call("echo " + str(monto), shell=True)  # B602
    return True

procesar_pago(100)