const express = require('express');
const router = express.Router();
const upload = require("multer")();
const photosCtrl = require('../../controllers/api/photos');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/photos
router.get('/', ensureLoggedIn, photosCtrl.index);
// POST /api/photos/upload
router.post('/upload', upload.single('photo'), ensureLoggedIn, photosCtrl.upload);
// DELETE /api/photos/:id
router.delete('/:id', ensureLoggedIn, photosCtrl.delete);



module.exports = router;