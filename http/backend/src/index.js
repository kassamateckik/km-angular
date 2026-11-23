import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { ensureDatabaseExists, sequelize } from './config/database.js';
import { Person } from './models/person.model.js';
import { initialPeople } from './seed/initialData.js';
import personRoutes from './routes/person.routes.js';

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/people', personRoutes);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: 'Szerver hiba történt.' });
});

async function start() {
  await ensureDatabaseExists();
  await sequelize.authenticate();

  const existingTables = (await sequelize.getQueryInterface().showAllTables()).map((t) =>
    (typeof t === 'string' ? t : t.tableName || Object.values(t)[0]).toLowerCase()
  );
  const tableExisted = existingTables.includes(Person.getTableName().toLowerCase());

  await sequelize.sync();

  if (!tableExisted) {
    await Person.bulkCreate(initialPeople);
    console.log(`Kezdeti ${initialPeople.length} adat beszúrva a(z) '${Person.getTableName()}' táblába.`);
  }

  app.listen(port, () => {
    console.log(`Backend szerver fut: http://localhost:${port}`);
  });
}

start().catch((err) => {
  console.error('Nem sikerült elindítani a backend szervert:', err);
  process.exit(1);
});
