import express from 'express';
import cors from 'cors';
import gameRouter from './routes/game.js';

const app = express();

// Enable CORS so frontend can talk to backend
app.use(cors({ origin: '*' }));

// Parse JSON bodies
app.use(express.json());

// Mount API router at /api
app.use('/api', gameRouter);

// Health check
app.get('/health', (_, res) => res.send('ok'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));