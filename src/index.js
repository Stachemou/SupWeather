const express = require('express');

import authRouter from './routes/authentification';

const bodyParser = require('body-parser');

const app = express();

const port = 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(
    express.urlencoded({
      extended: true,
    }),
);

app.use('/authentification', authRouter);

app.listen(port, function() {
  console.log('Le serveur fonctionne sur le port' + port);
});
