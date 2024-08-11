import express from 'express'
import logRouter from './routers/log-router';

const PORT = process.env.PORT || 4000;

const HOSTNAME = process.env.HOSTNAME || 'http://localhost';

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