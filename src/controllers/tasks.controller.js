const { getAllTasks, getTaskById, addTask, updateTask, deleteTask } = require('../services/tasks.services');


const getTasksCtrl = async (req, res, next) => {
  try {
    const tasks = await getAllTasks();
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};
const getIdCtrl = async (req, res) => {
  const id = Number(req.params.id);
  try {
    const task = await getTaskById(id);
    res.json(task);
  } catch (error) {
    console.log(error);
  }
};

// For all POST requests
const addNewTaskCtrl = async(req, res) => {
  const { description } = req.body;
  try {
    const newTask = {
      description,
    };
    const response = addTask(newTask);
    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
}

// For PUT requests
const updateTaskCtrl = async(req, res) => {
  try {
    const { id } = req.params; // Desestructuramos
    const task = req.body;
    // Enviamos la tarea al servicio
    await updateTask(parseInt(id, 10), task);
    res.status(204).json();
  } catch (error) {
    next(error);
  }
};

const deleteTaskCtrl = async(req, res, next) => {
  try {
    const { id } = req.params;
    await deleteTask(id);
    res.status(204).json();
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getTasksCtrl,
  getIdCtrl,
  addNewTaskCtrl,
  updateTaskCtrl,
  deleteTaskCtrl,
};
