const express = require("express");
const app = express();
const ADMIN_TOKEN = "Bearer hardcoded_admin_token_9999"; // Vulnerability

app.get("/usuario", (req, res) => {
  const id = req.query.id;
  // Vulnerability: SQL injection
  const sql = "SELECT * FROM usuarios WHERE id = " + id;
  res.send(sql);
});

app.post("/ejecutar", (req, res) => {
  const cmd = req.body.comando;
  // Vulnerability: command injection
  require("child_process").exec(cmd, (err, stdout) => {
    res.send(stdout);
  });
});