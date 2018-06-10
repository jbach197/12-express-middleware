'use strict';

import express from 'express';
import morgan from 'morgan'; //eslint-disable-line
import cors from 'cors'; //eslint-disable-line

import errorHandler from './middleware/error.js'; //eslint-disable-line
import notFound from './middleware/404.js'; //eslint-disable-line

let app = express();

let corsOptions = { //eslint-disable-line
  origin: 'http://example.com',
};

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

import router from './api/api.js';
app.use( router );
app.use(notFound);

let running = false;

module.exports = {
  start: (port) => {
    if(! running) {
      app.listen(port, (err) => {
        if(err) { throw err; }
        running = true;
        console.log('Server is up on port', port);
      });
    }
    else {
      console.log('Server is already running');
    }
  },

  stop: () => {
    app.close( () => {
      running = false;
      console.log('Server has been stopped');
    });
  },
};