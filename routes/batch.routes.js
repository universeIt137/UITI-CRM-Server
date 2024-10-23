const express = require('express');
const router = express.Router();
const verifyAccessToken = require('../middleware/user.middleware');
const { addBatch, getBatch, deleteBatchById } = require('../controllers/batch.controller');

router.post("/batch", verifyAccessToken, addBatch);

router.get("/batch", getBatch);

// router.get("/:id", getUserById);

// router.put("/update/:id", verifyAccessToken, updateUserById);

router.delete("/delete-batch/:id", deleteBatchById);

module.exports = router;