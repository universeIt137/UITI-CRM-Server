const express = require("express");
const {
  addCollection,
  getCollection,
  updateCollectionById,
  deleteCollectionById,
} = require("../controllers/collection.controller");
const router = express.Router();
const verifyAccessToken = require("../middleware/user.middleware");

router.post("/collection", verifyAccessToken, addCollection);

router.get("/collection", getCollection);
router.put("/update-collection/:id", updateCollectionById);
router.delete("/delete-collection/:id", deleteCollectionById);

module.exports = router;
