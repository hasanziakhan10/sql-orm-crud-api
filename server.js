const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const sequelize = require("./config/database");

const { Student, Course } = require("./models");

const studentRoutes = require("./routes/studentRoutes");
const courseRoutes = require("./routes/courseRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "SQL ORM CRUD API is running"
    });
});

app.use("/api/students", studentRoutes);
app.use("/api/courses", courseRoutes);

const PORT = process.env.PORT || 5000;

sequelize
    .sync()
    .then(() => {
        console.log("MySQL connected successfully");
        console.log("Database tables synchronized");

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Database connection failed:", error);
    });