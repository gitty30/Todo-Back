const express=require('express');
const router=express.Router();

const {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/todo");

router.route("/allTasks").get(getAllTasks);
router
  .route("/singleTask")
  .get(getTask)
  .post(createTask)
  .patch(updateTask)
  .delete(deleteTask);

module.exports = router;
