const Task = require("../models/task")

exports.createTask = async (req, res) => {
  try {
    const { title, description, priority, dueDate } = req.body;
    const task = new Task({ title, description, priority, dueDate });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ dueDate: 1 });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
