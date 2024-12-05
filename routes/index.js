const express = require('express');
const { CalculateReturns } = require('../controllers/calculate-returns');
const { TotalReturns } = require('../controllers/total-returns');
const {
  CalculateReturnPercentage,
} = require('../controllers/calculate-return-percentage');
const {
  TotalReturnPercentage,
} = require('../controllers/total-return-percentage');
const { Status } = require('../controllers/status');

const router = express.Router();

/**
 * Declare all routes here
 */

router.get('/', (req, res) => {
  res.status(200).json({ success: true, msg: 'app is up and running' });
});

router.get('/calculate-returns', CalculateReturns);
router.get('/total-returns', TotalReturns);
router.get('/calculate-return-percentage', CalculateReturnPercentage);
router.get('/total-return-percentage', TotalReturnPercentage);
router.get('/status', Status);

module.exports = router;
