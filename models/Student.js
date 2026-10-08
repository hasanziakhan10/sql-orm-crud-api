const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Student = sequelize.define("Student", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,

        validate: {
            notEmpty: {
                msg: "Student name is required"
            },
            len: {
                args: [3, 100],
                msg: "Student name must be between 3 and 100 characters"
            }
        }
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,

        validate: {
            isEmail: {
                msg: "Please provide a valid email address"
            }
        }
    },

    age: {
        type: DataTypes.INTEGER,
        allowNull: false,

        validate: {
            isInt: {
                msg: "Age must be an integer"
            },
            min: {
                args: [16],
                msg: "Student must be at least 16 years old"
            },
            max: {
                args: [100],
                msg: "Age must not be greater than 100"
            }
        }
    }
});

module.exports = Student;