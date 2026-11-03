require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.HIGHLIGHTLY_API_KEY;

app.get("/api/status", (req, res) => {
  res.json({
    app: "Futbol Stats Pro 2026",
    apiConfigured: Boolean(API_KEY)
  });
});

app.get("/api/matches", async (req, res) => {
  if (!API_KEY) {
    return res.status(500).json({
      error: "Falta configurar HIGHLIGHTLY_API_KEY"
    });
  }

  res.json({
    message: "Servidor conectado. Siguiente paso: configurar los partidos de Highlightly."
  });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en puerto ${PORT}`);
});
