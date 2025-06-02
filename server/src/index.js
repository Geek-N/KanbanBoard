import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import authRoutes from './routes/authRoutes.js';
import kanbanRoutes from './routes/kanbanRoutes.js';
import authenticateToken from './middleware/auth.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Krazy Kanban API is running!');
});

app.use('/api/auth', authRoutes);
app.use('/api/kanban', authenticateToken, kanbanRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
