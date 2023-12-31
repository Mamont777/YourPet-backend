const express = require('express');
const logger = require('morgan');
const cors = require('cors');

require('dotenv').config();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const authRouter = require('./routes/api/auth');
const usersRouter = require('./routes/api/users');
const noticesRouter = require('./routes/api/notices');
const petRouter = require('./routes/api/pets');
const friendsRouter = require('./routes/api/friends');
const newsRouter = require('./routes/api/news');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/notices', noticesRouter);
app.use('/api/pets', petRouter);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/friends', friendsRouter);
app.use('/api/news', newsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  console.log('err:', err);

  const { status = 500, message = 'Server error' } = err;

  res.status(status).json({ message });
});

module.exports = app;
