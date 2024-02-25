const express = require('express');
const router = express.Router();
const startersCtrl = require('../../controllers/api/starters');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/starters
router.post('/', ensureLoggedIn, startersCtrl.create);
// GET /api/starters
router.get('/', ensureLoggedIn, startersCtrl.index);
// GET (by id) /api/starters/:id

// PUT (edit a starter) /api/starters/:id

// DELETE /api/starters/:id


module.exports = router;