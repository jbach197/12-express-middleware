'use strict';

import express from 'express';
const router = express.Router();

import requireAll from 'require-dir';
const models = requireAll('../models');

import modelFinder from '../middleware/models.js';

let sendJSON = (res,data) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.write( JSON.stringify(data) );
  res.end();
};

router.get('/api/v1/:model', modelFinder, (req,res) => {
  req.model.fetchAll()
    .then( data => sendJSON(res,data) )
    .catch(err => {throw err});
});

router.get('/api/v1/:model/:id', modelFinder, (req,res) => {
  if ( req.params.id ) {
    req.model.findOne(req.params.id)
      .then(data => sendJSON(res, data))
      .catch(err => {throw err});
  }
  else {
    throw 'record not found';
  }

});

router.post('/api/v1/:model', modelFinder, (req,res) => {
  let record = new req.model(req.body);
  record.save()
    .then(data => sendJSON(res,data))
    .catch(console.error);

});


export default router;


