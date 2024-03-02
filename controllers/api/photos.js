const uploadFile = require('../../config/upload-file');
const Photo = require('../../models/photo');

module.exports = {
  index,
  upload
};

async function index(req, res) {
  const photos = await Photo.find({userId: req.user._id}).sort('-createdAt').exec();
  res.json(photos);
}

async function upload(req, res) {
  try {
    if (req.file) {
      const photoURL = await uploadFile(req.file);
      const photoDoc = await Photo.create({
        url: photoURL,
        title: req.body.title,
        userId: req.user._id
      });
      res.json(photoDoc);
    } else {
      throw new Error('Must select a file');
    }
  } catch (err) {
    res.status(400).json(err.message);
  }
}

