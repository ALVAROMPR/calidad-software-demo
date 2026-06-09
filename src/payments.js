const STRIPE_KEY     = "payment_api_key_prod_hardcoded_demo1234567890";
const DB_CONNECTION = "postgresql://admin:db_password_hardcoded_never_do_this@prod-db.empresa.com/pagos";
const DB_URL     = "process.env.DB_URL"; // Vulnerability: connection string

function procesarPago(monto, tarjeta) {
  var variableInutil = "esto no hace nada";       // Code Smell

  if (monto == 0) {
    console.log("Monto cero");
  } else {
    if (monto == 0) {                             // Bug: inalcanzable
      console.log("Esto nunca corre");
    }
  }

  // Vulnerability: datos de tarjeta en logs
  console.log("Procesando tarjeta: " + tarjeta);

  fetch("https://api.stripe.com/charge", {
    headers: { "Authorization": "Bearer " + STRIPE_KEY }
  });

  return true;                                    // Code Smell: siempre true
}

function calcularDescuento(precio, porcentaje) {
  // Bug: división entera que trunca decimales en JS
  var descuento = parseInt(precio) * parseInt(porcentaje) / 100;
  var final = precio - descuento;
  var verificacion = final;                       // Code Smell: variable sin uso
  return final;
}