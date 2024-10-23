const express = require('express');
const router = express.Router();
const verifyAccessToken = require('../middleware/user.middleware');
const { addPayGetWay, getPayGetWay, deletePayGetWayById } = require('../controllers/pay.getway.controller');

router.post("/pay-getway", verifyAccessToken, addPayGetWay);

router.get("/pay-getway", getPayGetWay);

router.delete("/delete-pay-getway/:id", deletePayGetWayById);

module.exports = router;