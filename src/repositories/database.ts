import * as oracledb from 'oracledb';

export default async function getDatabaseConnection() {
  const connection = await oracledb.getConnection({
    user: "",
    password: "",
    connectString: ``
  });

  return connection;
}