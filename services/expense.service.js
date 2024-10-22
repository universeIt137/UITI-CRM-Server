const expenseModel = require("../models/expense.model");

exports.expenseAddService = async (expenseInfo) => {
  const expense = await expenseModel.create(expenseInfo);
  return expense;
};

exports.getsAllService = async (document) => {
  try {
    const expenses = await expenseModel.find(document);
    return expenses;
  } catch (err) {
    // console.log(err)
    throw new Error(err.message);
  }
};

exports.getById = async (id) => {
  try {
    const user = await expenseModel.findById(id);
    return user;
  } catch (err) {
    // console.log(err)
    throw new Error(err.message);
  }
};

exports.UpdateById = async (id, update) => {
  try {
    // console.log("update is called");
    // console.log(id);
    // console.log(update);
    const user = await expenseModel.findOneAndUpdate({ _id: id }, update, {
      new: true,
    });
    return user;
  } catch (err) {
    // console.log(err)
    throw new Error(err.message);
  }
};

exports.deleteById = async (id) => {
  try {
    const lead = await expenseModel.findByIdAndDelete(id);
    return lead;
  } catch (err) {
    // console.log(err);
    throw new Error(err.message.split(":")[2]);
  }
};
