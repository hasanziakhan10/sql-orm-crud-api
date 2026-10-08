const express = require("express");
const router = express.Router();

const { Course } = require("../models");

// CREATE course
router.post("/", async (req, res) => {
    try {
        const course = await Course.create(req.body);

        res.status(201).json({
            message: "Course created successfully",
            course
        });
    } catch (error) {
        res.status(400).json({
            message: "Failed to create course",
            error: error.message
        });
    }
});

// GET all courses
router.get("/", async (req, res) => {
    try {
        const courses = await Course.findAll();

        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch courses",
            error: error.message
        });
    }
});

module.exports = router;