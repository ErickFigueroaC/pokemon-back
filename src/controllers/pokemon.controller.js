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
    const { codigoPokemon, sexo, puebloNatal, pokeballs, frutas, pociones, nombre } = req.body;
    if (
      codigoPokemon == undefined ||
      sexo == undefined ||
      puebloNatal == undefined ||
      pokeballs == undefined ||
      frutas == undefined ||
      pociones == undefined ||
      nombre == undefined
    ) {
      res.status(400).json({ message: 'Bad Request. Please fill all the fields.' });
      return;
    }
    const pokemon = { codigoPokemon, sexo, puebloNatal, pokeballs, frutas, pociones, nombre };
    const connection = await getConnection();
    const result = await connection.query('INSERT INTO Pokemon SET ?', pokemon);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getPokemons,
  addPokemon,
};
