import { Router } from 'express';
import { methods as pokemonController } from './../controllers/pokemon.controller';

const router = Router();

router.get('/', pokemonController.getPokemons);
router.post('/', pokemonController.addPokemon);

export default router;
