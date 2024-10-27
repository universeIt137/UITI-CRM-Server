const { default: mongoose } = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Course Name is required"],
        unique: true
    },
}, {
    timestamps: true,
    versionKey : false,
})


const Course = mongoose.model("Course", courseSchema);

module.exports = Course;