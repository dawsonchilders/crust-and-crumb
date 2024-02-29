const Starter = require('../../models/starter');

module.exports = {
  create,
  index,
  update,
  delete: deleteStarter
}

async function create(req, res) {
  try {
    const user = req.user._id;
    const starterData = {...req.body, user};
    const starter = await Starter.create(starterData);
    res.json(starter);
  } catch(err) {
    res.status(400).json(err)
  }
}

async function index(req, res) {
  try {
    const starters = await Starter.find({ user: req.user._id }).sort('-createdAt');
    res.json(starters);
  } catch(err) {
    res.status(400).json(err)
  }
}

async function update(req, res) {
  try {
    const updatedStarter = await Starter.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(updatedStarter);
  } catch(err) {
    res.status(400).json(err);
  }
}

async function deleteStarter(req, res) {
  try {
    await Starter.findByIdAndDelete(req.params.id);
    const starters = await Starter.find({ user: req.user._id });
    res.json(starters);
  } catch (err) {
    res.status(400).json(err);
  }
}