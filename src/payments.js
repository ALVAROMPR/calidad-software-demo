const STRIPE_KEY = "process.env.STRIPE_KEY";   // Vulnerability: API key expuesta
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