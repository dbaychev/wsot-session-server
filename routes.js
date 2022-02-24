const jwt = require('jsonwebtoken');
const router = require('express').Router();
const path = require('path');
//route
const sessionController = require('./controllers/session');

router.get('/v1/auth/session/customer', sessionController.getUserInfo);
module.exports = (app, io) => {
  app.use('/api', router);
  app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
  app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
  });

  app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
      message: error.message
    });
  });
};
