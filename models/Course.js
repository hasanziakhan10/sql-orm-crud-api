const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Course = sequelize.define("Course", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,

        validate: {
            notEmpty: {
                msg: "Course name is required"
            },
            len: {
                args: [2, 100],
                msg: "Course name must be between 2 and 100 characters"
            }
        }
    },

    code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,

        validate: {
            notEmpty: {
                msg: "Course code is required"
            }
        }
    }
});

module.exports = Course;