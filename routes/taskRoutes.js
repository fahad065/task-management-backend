const express = require("express");
const Task = require("../models/task")
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Create Task
router.post("/", authMiddleware, async (req, res) => {
  const { title, description, priority, dueDate } = req.body;
  try {
    const newTask = new Task({ title, description, priority, dueDate, user: req.user.id });
    await newTask.save();
    res.json(newTask);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Get Tasks
router.get("/", authMiddleware, async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.json(tasks);
});

// Update Task
router.put("/:id", authMiddleware, async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Task Updated" });
});

// Delete Task
router.delete("/:id", authMiddleware, async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task Deleted" });
});

module.exports = router;
