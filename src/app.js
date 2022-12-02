import express from 'express';
import morgan from 'morgan';
import pokemonRoutes from './routes/pokemon.routes';

const app = express();

// Settings
app.set('port', 8080);

// Middlewares
app.use(morgan('dev'));

// Routes
app.use('/api/pokemons', pokemonRoutes);

export default app;
