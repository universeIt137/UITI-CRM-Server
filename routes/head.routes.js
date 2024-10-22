const express = require('express');
const { addHead, getHead, deleteHeadById } = require('../controllers/head.controller');
const router = express.Router();
const verifyAccessToken = require('../middleware/user.middleware')

router.post("/head", verifyAccessToken, addHead);

router.get("/head", getHead);

// router.get("/:id", getUserById);

// router.put("/update/:id", verifyAccessToken, updateUserById);

router.delete("/delete-head/:id", deleteHeadById);

module.exports = router;