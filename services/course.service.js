const courseModel = require("../models/course.model");

exports.courseAddService = async (leadInfo) => {
    const course = await courseModel.create(leadInfo);
    return course;
}

exports.getsAllService = async (document) => {
    try {
        const courses = await courseModel.find(document);
        return courses
    }
    catch (err) {
        // console.log(err)
        throw new Error(err.message);
    }
}

exports.getByDeleteId = async (id) => {
    try {
        const user = await courseModel.findById(id);
        // // console.log(user);
        return user
    }
    catch (err) {
        // console.log(err)
        throw new Error(err.message);
    }
}

exports.remove = async (id) => {
    try {
        const lead = await courseModel.findByIdAndDelete(id);
        return lead
    }
    catch (err) {
        // console.log(err);
        throw new Error(err.message.split(":")[2]);

    }
}