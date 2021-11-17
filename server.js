const express = require('express');
const app = express();

const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200
}
require('dotenv').config();
const mongoose = require('mongoose');
const morgan = require('morgan');

const logger = require('./helpers/logger');

// local imports
const routes = require('./routes');

mongoose.connect(process.env.DB_KEY, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  logger.info(`database status: ${mongoose.connection.readyState}`);
  logger.info("Connected to DB");
});

app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan('dev'));

// feeding local middlewares
app.use('/api/v1', routes);

app.get('/', (req, res) => {
  res.status(200).send('hello')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`Server running at PORT: ${PORT}`)
})