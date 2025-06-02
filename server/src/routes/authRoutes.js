import express from 'express';
import jwt from 'jsonwebtoken';
const router = express.Router();

const DUMMY_USER = { username: 'admin', password: 'password' };

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username !== DUMMY_USER.username || password !== DUMMY_USER.password) {
    return res.status(403).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

export default router;
