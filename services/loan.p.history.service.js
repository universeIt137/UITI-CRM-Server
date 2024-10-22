const receiveLoanModel = require("../models/loan.p.history.model");


exports.loanPayAddService = async (expenseInfo) => {
    const loan = await receiveLoanModel.create(expenseInfo);
    return loan;
}

exports.getsAllService = async (document) => {
    try {
        const loans = await receiveLoanModel.find(document).populate('loanId');
        return loans
    }
    catch (err) {
        // console.log(err)
        throw new Error(err.message);
    }
}