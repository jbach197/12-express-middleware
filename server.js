'use strict';

import express from express;
import notFound from './404.js';
import errorHandler from './error.js';
import logger from './logger.js';

let app = express();

app.use(express.json());
app.use('*', logger);

app.get('/', logger,  (req, res) => {
  console.log('in the "/" route');
  res.status(200);
  res.send('ok');
});

app.post('/a', (req, res )=> {
  console.log('in the "/a" route');
  res.status(200);
  res.send('ok');
});


app.use('*', notFound);
app.use(errorHandler);

app.listen(3000);