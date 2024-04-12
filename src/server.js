const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.post('https://652964f055b137ddc83ebb8e.mockapi.io/Formulario', (req, res) => {
  const formData = req.body;
  console.log('Dados do formulário recebidos:', formData);
  res.status(200).send('Dados do formulário recebidos com sucesso!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
