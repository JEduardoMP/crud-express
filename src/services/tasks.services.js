const e = require('express');
const fs = require('fs/promises');
const path = require('path');

const TASK_PATH = path.resolve(__dirname, '..', 'tasks.json');

const getAllTasks = async () => {
  try {
    const tasks = await fs.readFile(TASK_PATH, 'utf8');
    return JSON.parse(tasks);
  } catch (error) {
    console.log(error);
  }
};

const getTaskById = async(id) => {
  // Completar la lógica para poder obtener una tarea por su id
  try {
    const tasks = await getAllTasks();
    const taskById = tasks.find(e => e.id === id);
    return taskById;
  } catch (error) {
    console.log(error);
  }
};

const idGenerator = async() => {
  try {
    const tasks = await getAllTasks();
    const iterator = tasks.length - 1;
    const createId = tasks[iterator].id + 1;
    return createId;
  } catch (error) {
    console.log(error);
  }
}

const writeTask = async(anyTask) => {
  try {
    await fs.writeFile(TASK_PATH, JSON.stringify(anyTask))
  } catch (error) {
    throw error;
  }
}

const addTask = async(taskObj) => {
  try {
    const tasks = await getAllTasks();
    const idNew = await idGenerator();
    taskObj = {
      id: idNew,
      ...taskObj
    };
    tasks.push(taskObj);
    await writeTask(tasks);
    return taskObj;
  } catch (error) {
    console.log(error);
  }
}

const updateTask = async(id, task) => {
  try {
    const tasks = await getAllTasks();
    const indexTask = tasks.findIndex(e => e.id === id);
    const taskObj = {
      ...tasks[indexTask],
      ...task
    };
    tasks[indexTask] = taskObj
    await writeTask(tasks);
    return taskObj;
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = (id) => {
  try {
    const tasks = await getAllTasks();
    const taskIndex = tasks.find(e => e.id === id);
    tasks.splice(taskIndex, 1);
    await writeTask(tasks);
    return true;
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
};
