import express from 'express';
import morgan from 'morgan';
import pokemonRoutes from './routes/pokemon.routes';
import cors from 'cors';

const app = express();

// Settings
app.set('port', 8080);

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/pokemons', pokemonRoutes);

export default app;
