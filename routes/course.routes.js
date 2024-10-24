const express = require('express');
const { addCourse, getCourse, deleteCourseById } = require('../controllers/course.controller');
const router = express.Router();
const verifyAccessToken = require('../middleware/user.middleware')

router.post("/course", verifyAccessToken, addCourse);

router.get("/course", getCourse);

// router.get("/:id", getUserById);

// router.put("/update/:id", verifyAccessToken, updateUserById);

router.delete("/delete-course/:id", deleteCourseById);

module.exports = router;