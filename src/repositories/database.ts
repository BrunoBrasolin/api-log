import { Knex } from "knex";

export default async function getDatabaseConnection() {
  const knex: Knex  = require('knex')({
    client: 'oracledb',
    connection: {
      user: process.env.NODEJS_DATABSE_USER,
      password: process.env.NODEJS_DATABSE_PASSWORD,
      connectString: process.env.NODEJS_DATABSE_CONNECT_STRING
    }
  })

  return knex;
}