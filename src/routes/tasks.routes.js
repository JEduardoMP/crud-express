const { Router } = require('express');
const { getTasksCtrl, getIdCtrl, addNewTaskCtrl, updateTaskCtrl, deleteTaskCtrl} = require('../controllers/tasks.controller');

const router = Router();

router.get('/tasks', getTasksCtrl); // Obtener la lista de tareas
router.get('/tasks/:id', getIdCtrl); // Obtener una tarea por su id -> Actividad
router.post('/tasks', addNewTaskCtrl); // Ingresa una nueva tarea
router.put('/tasks/:taskId', updateTaskCtrl); // Edita una tarea
router.delete('/tasks/:taskId', deleteTaskCtrl);

module.exports = router;
