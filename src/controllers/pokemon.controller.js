import { getConnection } from './../database/database';

const getPokemons = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query('SELECT * FROM Pokemon');
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const addPokemon = async (req, res) => {
  try {
    const { codigoPokemon, codigoEntrenador, mote, especie, codigoPokedex } = req.body;
    const pokemon = { codigoPokemon, codigoEntrenador, mote, especie, codigoPokedex };
    const connection = await getConnection();
    const result = await connection.query('INSERT INTO Pokemon SET ?', pokemon);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const deletePokemon = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query('DELETE FROM Pokemon WHERE codigoPokemon = ?', id);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getPokemons,
  addPokemon,
  deletePokemon,
};
