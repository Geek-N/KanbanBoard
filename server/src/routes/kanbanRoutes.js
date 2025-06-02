import express from 'express';
const router = express.Router();

const tasks = [
  { id: 1, title: 'Setup project', status: 'todo' },
  { id: 2, title: 'Login page', status: 'in-progress' },
  { id: 3, title: 'Deploy app', status: 'done' }
];

router.get('/', (req, res) => {
  res.json(tasks);
});

export default router;
