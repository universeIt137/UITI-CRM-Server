const { courseAddService, getsAllService, getByDeleteId, remove } = require('../services/course.service')

const addCourse = async (req, res) => {
    try {
        // console.log(req.user);
        // if (req.user.role !== 'admin') {
        //     return res.status(403).send({ message: 'forbidden access' })
        // }

        if (req.headers.role !== 'admin') {
            return res.status(403).send({ message: 'forbidden access' })
        }




        const course = await courseAddService(req.body);
        res.status(200).json({
            status: 'success',
            message: "New Course Added Successfully",
            course: course
        })

    }
    catch (err) {
        // console.log(err);
        res.status(500).json({
            message: err.message
        })
    }
}

const getCourse = async (req, res) => {
    try {
        const query = req.query;
        const users = await getsAllService(query);
        res.status(200).json({
            status : "success",
            users
        })
    }
    catch (err) {
        // console.log(err);
        res.status(500).json({
            message: err.message
        })
    }
}

const deleteCourseById = async (req, res) => {
    try {
        const id = req.params.id;
        // // console.log(id);

        const exist = await getByDeleteId(id);
        if (!exist) {
            return res.status(404).json({
                message: "No course found!",
            })
        }

        const lead = await remove(id);
        res.status(200).json({
            message: "course delete successful",
            lead
        })
    }
    catch (err) {
        // console.log(err);
        res.status(500).json({
            message: err.message
        })
    }
}

module.exports = { addCourse, getCourse, deleteCourseById }