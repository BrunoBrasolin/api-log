require('dotenv').config({ path: '/app/config/.env' });

import express from 'express'
import logRouter from './routers/log-router';

const PORT = process.env.NODEJS_PORT;

const HOSTNAME = process.env.NODEJS_HOSTNAME;


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logRouter);

app.use((req, res) => {
  res.status(404)
});

app.listen(PORT, () => {
  console.log(`Server started ${HOSTNAME}:${PORT}`);
});