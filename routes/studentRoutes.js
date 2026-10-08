const express = require("express");
const router = express.Router();

const { Student, Course } = require("../models");

// CREATE STUDENT
router.post("/", async (req, res) => {
    try {
        const student = await Student.create(req.body);

        res.status(201).json({
            message: "Student created successfully",
            student
        });
    } catch (error) {
        res.status(400).json({
            message: "Failed to create student",
            error: error.message
        });
    }
});

// GET ALL STUDENTS
router.get("/", async (req, res) => {
    try {
        const students = await Student.findAll({
            include: {
                model: Course,
                attributes: ["id", "name", "code"]
            }
        });

        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch students",
            error: error.message
        });
    }
});

// GET STUDENT BY ID
router.get("/:id", async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id, {
            include: {
                model: Course,
                attributes: ["id", "name", "code"]
            }
        });

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch student",
            error: error.message
        });
    }
});

// UPDATE STUDENT
router.put("/:id", async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        await student.update(req.body);

        res.status(200).json({
            message: "Student updated successfully",
            student
        });
    } catch (error) {
        res.status(400).json({
            message: "Failed to update student",
            error: error.message
        });
    }
});

// DELETE STUDENT
router.delete("/:id", async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        await student.destroy();

        res.status(200).json({
            message: "Student deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to delete student",
            error: error.message
        });
    }
});

module.exports = router;