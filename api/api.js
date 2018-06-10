'use strict';

import express from 'express';
const router = express.Router();

import modelFinder from '../middleware/models.js';
router.param('model', modelFinder);

router.get('/api/v1/:model', modelFinder, (req,res) => {
  req.model.fetchAll()
    .then( data => sendJSON(res,data) )
    .catch(err => {throw err;});
});

router.get('/api/v1/:model/:id', (req,res) => {
  req.model.findOne(req.params.id)
    .then( data => { sendJSON(res,data);} )
    .catch(err => { throw err; });
});

router.delete('/api/v1/:model/:id', (req,res) => {
  if ( req.params.id ) {
    let result = {action:'delete',id:req.params.id};
    sendJSON(res,result);
  }
  else {
    throw 'Record Not Found';
  }

});

router.post('/api/v1/:model', modelFinder, (req,res) => {
  let record = new req.model(req.body);
  record.save()
    .then(data => sendJSON(res,data))
    .catch(console.error);
});

let sendJSON = (res,data) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.write( JSON.stringify(data) );
  res.end();
};

export default router;


