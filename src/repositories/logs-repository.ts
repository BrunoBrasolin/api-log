import Log from "../models/log";
import getDatabaseConnection from "./database";

const logsRepository = {
  list: async () => {

    let connection = null;

    try {
      connection = await getDatabaseConnection();

      const result = await connection.execute("SELECT * FROM LOG ORDER BY 1 DESC");

      return result.rows as Log[];

    } finally {
      if (connection != null)
        await connection.close();
    }
  }
}

export default logsRepository;