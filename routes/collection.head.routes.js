const express = require('express');
const { addCollectionHead, getCollectionHead, deleteCollectionById } = require('../controllers/collection.head.controller');
const router = express.Router();
const verifyAccessToken = require('../middleware/user.middleware')

router.post("/collection-head", verifyAccessToken, addCollectionHead);

router.get("/collection-head", getCollectionHead);

// router.get("/:id", getUserById);

// router.put("/update/:id", verifyAccessToken, updateUserById);

router.delete("/delete-collection-head/:id", deleteCollectionById);

module.exports = router;