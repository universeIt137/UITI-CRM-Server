const express = require('express');
const { addExpenseHead, getExpenseHead, deleteExpenseHeadById } = require('../controllers/expense.head');
const router = express.Router();
const verifyAccessToken = require('../middleware/user.middleware')

router.post("/expense-head", verifyAccessToken, addExpenseHead);

router.get("/expense-head", getExpenseHead);

// router.get("/:id", getUserById);

// router.put("/update/:id", verifyAccessToken, updateUserById);

router.delete("/delete-expense-head/:id", deleteExpenseHeadById);

module.exports = router;