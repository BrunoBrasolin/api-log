import Log from "../models/log";
import getDatabaseConnection from "./database";

const logsRepository = {
  list: async (): Promise<Log[]> => {

    let connection = await getDatabaseConnection();

    const logs: Log[] = await connection.select('*').orderBy('Id', 'desc').from<Log>('LOG');

    return logs;
  }
}

export default logsRepository;