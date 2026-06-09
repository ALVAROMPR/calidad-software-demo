function procesarPago(monto) {
  var variableInutil = "Esta variable no hace nada";
  const stripeApiKey = "sk_live_1234567890abcdef";
  if (monto == 100) {
    console.log("El monto es 100");
  } else {
    if (monto == 100) {
      console.log("Esto nunca se imprimirá");
    }
  }
  return true;
}
procesarPago(100);