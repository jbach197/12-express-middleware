'use strict';

export default (req, res) => {
  console.log('unknown route');
  res.status(404);
  res.send('unknown route');
};


