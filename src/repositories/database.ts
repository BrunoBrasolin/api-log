import { Knex } from "knex";

export default async function getDatabaseConnection() {
  const knex: Knex  = require('knex')({
    client: 'oracledb',
    connection: {
      user: process.env.DATABSE_USER,
      password: process.env.DATABSE_PASSWORD,
      connectString: process.env.DATABSE_CONNECT_STRING
    }
  })

  return knex;
}