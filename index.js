const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Main Page");
});

app.get("/:hello", (req, res) => {
  res.send("Response " + req.params.hello);
});

const password = 123;
const Vigenere = require('caesar-salad').Vigenere;

app.get("/encode/:text", (req, res) => {
  res.send (Vigenere.Cipher(password).crypt(req.params.text));
});

app.get("/decode/:text", (req, res) => {
  res.send(Vigenere.Decipher(password).crypt(req.params.text))
});

app.listen(port, () => {
  console.log("Express server listening on port " + port);
});
