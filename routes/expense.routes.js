const express = require("express");
const {
  addExpense,
  getExpense,
  deleteExpenseById,
  updateExpenseById,
} = require("../controllers/expense.controller");
const router = express.Router();
const verifyAccessToken = require("../middleware/user.middleware");

router.post("/expense", verifyAccessToken, addExpense);

router.get("/expense", getExpense);

router.put("/update-expense/:id", updateExpenseById);

router.delete("/delete-expense/:id", deleteExpenseById);

module.exports = router;
