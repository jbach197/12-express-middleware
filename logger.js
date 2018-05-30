'use strict';

export default (req, res, next) => {
  console.log('log things');
  next();
};