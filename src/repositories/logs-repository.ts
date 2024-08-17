import Log from "../models/log";
import getDatabaseConnection from "./database";

const logsRepository = {
  list: async (): Promise<Log[]> => {

    let connection = await getDatabaseConnection();

    const logs: Log[] = await connection.select('*')
                                        .orderBy('Id', 'desc')
                                        .from<Log>('LOG')
                                        .limit(100);

    return logs;
  }
}

export default logsRepository;