'use strict';

require('dotenv').config();

require('babel-register');

require('./server.js').start(process.env.PORT);