const Expense = require("../models/expense.model");

exports.expenseAddService = async (expenseInfo) => {
  const expense = await Expense.create(expenseInfo);
  return expense;
};

exports.getsAllService = async (document) => {
  try {
    const expenses = await Expense.find(document);
    return expenses;
  } catch (err) {
    // console.log(err)
    throw new Error(err.message);
  }
};

exports.getById = async (id) => {
  try {
    const user = await Expense.findById(id);
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
    const user = await Expense.findOneAndUpdate({ _id: id }, update, {
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
    const lead = await Expense.findByIdAndDelete(id);
    return lead;
  } catch (err) {
    // console.log(err);
    throw new Error(err.message.split(":")[2]);
  }
};
