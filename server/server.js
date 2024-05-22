"use client";
const express = require('express');
const cors = require("cors");
const app = express();
const port = 8080;

app.use(cors());

app.get('/api/home', (req, res) => {
  res.json({
    message: "Bonjour"
  });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
