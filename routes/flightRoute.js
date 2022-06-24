const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router
.get('/', controller.getFlights)
.get('/',controller.getFlight)
.post('/', controller.bookFlight)
.put('/', controller.updateFlights);

module.exports = router;

