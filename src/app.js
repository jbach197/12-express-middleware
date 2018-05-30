'use strict';

import express from 'express';
import errorHandler from './middleare/error.js';
let app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(errorHandler);

import router from './api/api.js';
app.use( router );

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