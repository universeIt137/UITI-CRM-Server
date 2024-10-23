const express = require('express');
const { addLoan, getLoan, deleteLoanById, updateLoanPayById, updateLoanProPayById } = require('../controllers/loan.controller');
const router = express.Router();
const verifyAccessToken = require('../middleware/user.middleware')

router.post("/loan", verifyAccessToken, addLoan);

router.get("/loan", getLoan);

router.delete("/delete-loan/:id", deleteLoanById);

router.put("/update-loan-pay/:id", updateLoanPayById);

router.patch("/update-loanPro-pay/:id", updateLoanProPayById);

module.exports = router;