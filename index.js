const express = require('express');
const { Sequelize } = require('sequelize');

const app = express();
app.use(express.json());

// Configurar base de datos
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

// Test connection
sequelize.authenticate()
  .then(() => console.log('Connected to database'))
  .catch(err => console.error('Database connection error:', err));

app.get('/', (req, res) => {
  res.json({ message: 'Blog API' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
