const { payGetwayAddService, getsAllService, getByDeleteId, remove } = require('../services/pay.getway.service')

const addPayGetWay = async (req, res) => {
    try {
        // console.log(req.user);
        // if (req.user.role !== 'admin') {
        //     return res.status(403).send({ message: 'forbidden access' })
        // }
        if (req.headers.role !== 'admin') {
            return res.status(403).send({ message: 'forbidden access' })
        }
        const lead = await payGetwayAddService(req.body);
        res.status(200).json({
            message: "New Payment Getway Added Successfully",
            lead: lead
        })

    }
    catch (err) {
        // console.log(err);
        res.status(500).json({
            message: err.message
        })
    }
}

const getPayGetWay = async (req, res) => {
    try {
        const query = req.query;
        const users = await getsAllService(query);
        res.status(200).json({
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

const deletePayGetWayById = async (req, res) => {
    try {
        const id = req.params.id;
        // // console.log(id);

        const exist = await getByDeleteId(id);
        if (!exist) {
            return res.status(404).json({
                message: "No PayGetWay found!",
            })
        }

        const lead = await remove(id);
        res.status(200).json({
            message: "PayGetWay delete successful",
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

module.exports = { addPayGetWay, getPayGetWay, deletePayGetWayById}