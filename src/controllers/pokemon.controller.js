import { getConnection } from './../database/database';

const getPokemons = async (req, res) => {
  const connection = await getConnection();
  const result = await connection.query('SELECT * FROM Pokemon');
  res.json(result);
};

export const methods = {
  getPokemons,
};
