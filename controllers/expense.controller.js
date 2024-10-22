const {
  expenseAddService,
  getsAllService,

  deleteById,
  UpdateById,
  getById,
} = require("../services/expense.service");

const addExpense = async (req, res) => {
  try {
    // console.log(req.user);
    // if (req.user.role !== "admin") {
    //   return res.status(403).send({ message: "forbidden access" });
    // }


    if (req.headers.role !== "admin") {
      return res.status(403).send({ message: "forbidden access" });
    }

    const expense = await expenseAddService(req.body);

    res.status(200).json({
      message: "Expense Added Successfully",
      expense: expense,
    });
  } catch (err) {
    // console.log(err);
    res.status(500).json({
      message: err.message,
    });
  }
};

const getExpense = async (req, res) => {
  try {
    const query = req.query;
    const expenses = await getsAllService(query);
    res.status(200).json({
      expenses,
    });
  } catch (err) {
    // console.log(err);
    res.status(500).json({
      message: err.message,
    });
  }
};

const updateExpenseById = async (req, res) => {
  try {
    const id = req.params.id;

    const exist = await getById(id);
    // console.log(exist);
    if (!exist) {
      return res.status(404).json({
        message: "No expense found!",
      });
    }

    const update = req.body;
    // console.log("update");
    // console.log(req.body);

    const lead = await UpdateById(id, update);

    res.status(200).json({
      message: "expense update successfully",
      lead,
    });
  } catch (err) {
    // console.log(err);
    res.status(500).json({
      message: err.message,
    });
  }
};

const deleteExpenseById = async (req, res) => {
  try {
    const id = req.params.id;

    const exist = await getById(id);
    if (!exist) {
      return res.status(404).json({
        message: "No expense found!",
      });
    }

    const lead = await deleteById(id);
    res.status(200).json({
      message: "expense delete successful",
      lead,
    });
  } catch (err) {
    // console.log(err);
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = { addExpense, getExpense, deleteExpenseById, updateExpenseById };
