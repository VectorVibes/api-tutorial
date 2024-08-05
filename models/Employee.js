const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Full Stack Developer', 'Full Stack Java', 'Full Stack Python'],
        required: true
    },
    salary: {
        type: String,
        required: true
    }
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
