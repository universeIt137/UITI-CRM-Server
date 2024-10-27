const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const leadSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Lead Name is required"],
    },
    phone: {
      type: String,
      required: [true, "Lead Phone Number is required"],
      unique: true,
    },
    email: {
      type: String,
      validate: {
        validator: (v) =>
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
        message: "Invalid email format",
      },
    },
    firstFollow: String,
    secondFollow: String,
    thirdFollow: String,
    nextFollow: String,
    remark: String,
    remarkTwo: String,
    admissionStatus: String,

    head: {
      name: { type: String, required: true },
      id: { type: mongoose.Schema.Types.ObjectId, ref: "Head" },
    },
    user: {
      name: { type: String, required: true },
      id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
    course: {
      name: { type: String, required: true },
      id: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
    },
    batch: {
      name: { type: String, required: true },
      id: { type: mongoose.Schema.Types.ObjectId, ref: "Batch", required: true },
    },
    preBatch: {
      name: String,
      id: { type: mongoose.Schema.Types.ObjectId, ref: "Batch" },
    },

    admission: { type: Boolean, default: false },
    close: { type: Boolean, default: false },
    onlineInterested: { type: Boolean, default: false },
    offlineInterested: { type: Boolean, default: false },
    seminarInterested: { type: Boolean, default: false },
    noReceive: { type: Boolean, default: false },
    seminarAttend: { type: Boolean, default: false },
    closePayment: { type: Boolean, default: false },

    admissionFee: Number,

    firstInstallment: Number,
    firstPaymentAccounts: String,
    firstInstallmentTID: String,
    firstInstallmentDate: { type: Date },

    secondInstallment: Number,
    secondPaymentAccounts: String,
    secondInstallmentTID: String,
    secondInstallmentDate: { type: Date },

    thirdInstallment: Number,
    thirdPaymentAccounts: String,
    thirdInstallmentTID: String,
    thirdInstallmentDate: { type: Date },

    nextInstallmentDate: { type: Date },
    totalInstallment: Number,
    description: String,
  },
  { timestamps: true }
);

const Lead = model("Lead", leadSchema);
module.exports = Lead;
