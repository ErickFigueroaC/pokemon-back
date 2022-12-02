import { Router } from 'express';
import { methods as pokemonController } from './../controllers/pokemon.controller';

const router = Router();

router.get('/', pokemonController.getPokemons);
router.post('/', pokemonController.addPokemon);
router.put('/:id', pokemonController.updatePokemon);
router.delete('/:id', pokemonController.deletePokemon);

export default router;
