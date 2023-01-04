const models = require("../model/model");

const getAllTasks = async (req, res) => {
  try {
    const Task = await models.find({});
    // console.log(typeOf(Task));
    res.status(200).json(Task);
    console.log(typeof models);
  } catch (error) {
   res.json(404).json(error);
  }

  //   res.send("all data will be here");
};
const getTask = async (req, res) => {
  const { id } = req.query;
  try {
    const Task = await models.findById(id);
    res.status(200).json(Task );
  } catch (error) {
 res.json(404).json(error);
  }
};

const createTask = async (req, res) => {
  // console.log(req.query);
   const { title } = req.body;
  try {
    const Task = await models.create({title});
    res.status(200).json(Task);
  } catch (error) {
  res.json(404).json(error);
  }
};

const updateTask = async (req, res) => {
  // const { id } = req.query;
     const { id,title } = req.body;
  // const options={new:true};
  try {
    const Task = await models.findByIdAndUpdate(id, {title});
    res.status(200).json(Task);
  } catch (error) {
 res.json(404).json(error);
  }

  //   res.send("upadted data here");
};

const deleteTask = async(req, res) => {
  const { id } = req.query;
  try {
    const Task = await models.findByIdAndDelete(id);
    console.log("guuu")
     console.log(Task)
    res.status(200).send(`Task with id ${id} is deleted `);
  } catch (error) {
    res.json(404).json(error );
  }
};

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
