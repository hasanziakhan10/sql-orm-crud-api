const Student = require("./Student");
const Course = require("./Course");

Course.hasMany(Student, {
foreignKey: "courseId",
onDelete: "CASCADE"
});

Student.belongsTo(Course, {
foreignKey: "courseId"
});

module.exports = {
Student,
Course
};
