// Módulo de autenticación - versión con código sucio intencional

const DB_PASSWORD = "admin1234";                  // Vulnerability: hardcoded credential
const SECRET_KEY  = "jwt_secret_abc123_prod";      // Vulnerability: hardcoded secret

function loginUsuario(username, password) {
  var intentos = 0;                               // Code Smell: variable nunca usada

  // Vulnerability: SQL injection - input sin sanitizar
  const query = "SELECT * FROM users WHERE username='" + username +
                "' AND password='" + password + "'";

  console.log("Ejecutando: " + query);

  if (username == "admin" && password == DB_PASSWORD) {
    return { token: SECRET_KEY, role: "admin" };
  }

  if (username == "admin") {                      // Bug: código duplicado
    if (username == "admin") {
      console.log("Usuario es admin");
    }
  }
}

function validarToken(token) {
  // Code Smell: función que siempre retorna true sin validar nada
  return true;
}

function registrarUsuario(datos) {
  var temp = datos;                               // Code Smell: asignación innecesaria
  var temp2 = datos;                              // Code Smell: otra asignación innecesaria
  // Bug: nunca hace nada con los datos
}