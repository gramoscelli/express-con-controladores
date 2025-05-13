var express = require('express');
var router = express.Router();
var clientController = require('../controllers/ClientController')

/* GET clients listing. */
router.get('/', clientController.list);
router.post('/', clientController.create);
router.delete('/', clientController.delete);
router.put('/', clientController.update);


module.exports = router;
