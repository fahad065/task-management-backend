const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    priority: { type: String, enum: ["Low", "Medium", "High"], required: true },
    dueDate: { type: Date, required: true },
    status: { type: String, enum: ["Pending", "Completed", "Overdue"], default: "Pending" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

// Pre-save middleware to update task status based on dueDate
TaskSchema.pre("save", function (next) {
  const currentDate = new Date();

  if (this.dueDate < currentDate && this.status !== "Completed") {
    this.status = "Overdue";
  }

  next();
});

module.exports = mongoose.model("Task", TaskSchema);
