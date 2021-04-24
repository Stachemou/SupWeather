import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import {homeRouter} from './routes/home.js';
import {authRouter} from './routes/authentification.js';
import {db} from './dbConfig.js';


const app = express();

const port = 3002;

mongoose.connect(db.url, {useNewUrlParser: true, useUnifiedTopology: true})
    .catch(console.error);


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(
    express.urlencoded({
      extended: true,
    }),
);

app.use('/authentification', authRouter);
app.use('/home', homeRouter);

app.listen(port, function() {
  console.log('Le serveur fonctionne sur le port ' + port);
});
