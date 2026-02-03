import express from 'express';
import cors from 'cors';

const app = express();

// Enable CORS for frontend
app.use(cors({ origin: '*' }));

// Parse JSON bodies
app.use(express.json());

// Routes
import gameRouter from './routes/game.js';
app.use('/api', gameRouter);

// Health check
app.get('/health', (_, res) => res.send('ok'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));