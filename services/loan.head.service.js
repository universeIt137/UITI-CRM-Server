const loanHeadModel = require("../models/loan.head.model");



exports.loanHeadAddService = async (loanHeadInfo) => {
    const loanHead = await loanHeadModel.create(loanHeadInfo);
    return loanHead;
}

exports.getsAllService = async (document) => {
    try {
        const courses = await loanHeadModel.find(document);
        return courses
    }
    catch (err) {
        // console.log(err)
        throw new Error(err.message);
    }
}

exports.getByDeleteId = async (id) => {
    try {
        const user = await loanHeadModel.findById(id);
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
        const lead = await loanHeadModel.findByIdAndDelete(id);
        return lead
    }
    catch (err) {
        // console.log(err);
        throw new Error(err.message.split(":")[2]);

    }
}