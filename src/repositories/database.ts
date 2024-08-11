import { Knex } from "knex";

export default async function getDatabaseConnection() {
  const knex: Knex  = require('knex')({
    client: 'oracledb',
    connection: {
      user: "",
      password: "",
      connectString: `(`
    }
  })

  return knex;
}