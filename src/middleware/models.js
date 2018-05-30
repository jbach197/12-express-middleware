'use strict';

import requireAll from 'require-dir';
const models = requireAll('../models');

export default (req, res, next) => {
  if ( req.params.model && models[req.params.model] ) {

    req.model = models[req.params.model].default ? models[req.params.model].default : undefined;
    
    next();
    }
  else {
    throw `Model ${req.params.model} not found`;
  };


export default model;