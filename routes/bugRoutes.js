import express from 'express';
import Bug from '../models/Bug.js';

const router = express.Router();

// GET all bugs
router.get('/', async (req, res) => {
  const bugs = await Bug.find();
  res.json(bugs);
});

// POST new bug
router.post('/', async (req, res) => {
  try {
    const bug = new Bug(req.body);
    const savedBug = await bug.save();
    res.status(201).json(savedBug);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
