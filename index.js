const express = require('express');
const { Sequelize } = require('sequelize');

const app = express();
app.use(express.json());

// Configurar base de datos
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

const defineModels = require('./models');
const { Post, Comment } = defineModels(sequelize);

// Sincronizar modelos con la base de datos
sequelize.sync({ force: true })
  .then(() => console.log('Database & tables created!'))
  .catch(err => console.error('Sync error:', err));

// Importar rutas
require('./routes')(app, { Post, Comment });

// Test connection
sequelize.authenticate()
  .then(() => console.log('Connected to database'))
  .catch(err => console.error('Database connection error:', err));

app.get('/', (req, res) => {
  res.json({ message: 'Blog API' });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
