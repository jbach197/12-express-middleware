'use strict';

export default (err, req, res, next) => {
  console.log('error');
  res.status(500);
  res.send('does not exist');
};