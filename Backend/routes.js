const express = require('express');
const router = express.Router();

//const basic = require('./BasicController.js');

//configuración tutas

router.get('/home',  function (req, res) {
    res.send('Server en ejecución home...')
  });
// router.get('/second', basic.second);

module.exports = router;