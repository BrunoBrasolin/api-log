import express from 'express';
import logsRepository from '../repositories/logs-repository';

const logRouter = express.Router();

logRouter.get('/', async (req, res) => {

  const list = await logsRepository.list();

  res.json(list);
});

export default logRouter;