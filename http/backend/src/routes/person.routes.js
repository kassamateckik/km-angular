import { Router } from 'express';
import { Person } from '../models/person.model.js';

const router = Router();

function isValidDateString(value) {
  return typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value);
}

// READ ALL
router.get('/', async (_req, res, next) => {
  try {
    const people = await Person.findAll({ order: [['id', 'ASC']] });
    res.json(people);
  } catch (err) {
    next(err);
  }
});

// READ ONE
router.get('/:id', async (req, res, next) => {
  try {
    const person = await Person.findByPk(req.params.id);
    if (!person) {
      return res.status(404).json({ message: 'A rekord nem található.' });
    }
    res.json(person);
  } catch (err) {
    next(err);
  }
});

// CREATE
router.post('/', async (req, res, next) => {
  try {
    const name = typeof req.body?.name === 'string' ? req.body.name.trim() : '';
    const birthDate = req.body?.birthDate;

    if (!name || !isValidDateString(birthDate)) {
      return res.status(400).json({
        message: 'Érvényes név és születési dátum (YYYY-MM-DD) megadása kötelező.',
      });
    }

    const created = await Person.create({ name, birthDate });
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
});

// UPDATE
router.put('/:id', async (req, res, next) => {
  try {
    const person = await Person.findByPk(req.params.id);
    if (!person) {
      return res.status(404).json({ message: 'A rekord nem található.' });
    }

    const name = typeof req.body?.name === 'string' ? req.body.name.trim() : '';
    const birthDate = req.body?.birthDate;

    if (!name || !isValidDateString(birthDate)) {
      return res.status(400).json({
        message: 'Érvényes név és születési dátum (YYYY-MM-DD) megadása kötelező.',
      });
    }

    await person.update({ name, birthDate });
    res.json(person);
  } catch (err) {
    next(err);
  }
});

// DELETE
router.delete('/:id', async (req, res, next) => {
  try {
    const deletedCount = await Person.destroy({ where: { id: req.params.id } });
    if (deletedCount === 0) {
      return res.status(404).json({ message: 'A rekord nem található.' });
    }
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

export default router;
